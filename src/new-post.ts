import prompts from 'prompts';
import config from '#/config';
import fs from 'node:fs';


export async function newPost() {
    // ask name
    // ask description
    // ask slug (generated from name)
    // ask tags (select from list from config.ts)
    // ask category (select from list from config.ts)
    // ask date (default to today)
    // ask image (optional)
    // then open in vscode the new file

    const response = await prompts([
        {
            type: 'text',
            name: 'title',
            message: 'What is the title of the post?',
            validate: (value) => value.length > 0 ? true : 'Please enter a title',
        },
        {
            type: 'text',
            name: 'description',
            message: 'What is the description of the post?',
            validate: (value) => value.length > 0 ? true : 'Please enter a description',
        },
        {
            type: 'text',
            name: 'slug',
            message: 'What is the slug of the post?',
            // suggest: (input) => input.replace(/ /g, '-').toLowerCase(),
            // above but only lowercase letters, numbers, and dashes stay in the slug (everything else is converted to dashes)
            suggest: (input) => input.replace(/[^a-z0-9-]/g, '-').toLowerCase(),
            validate: (value) => {
                if (value.length === 0) {
                    return 'Please enter a slug';
                }

                if (fs.existsSync(`posts/${value}.mdx`)) {
                    return 'A post with this slug already exists';
                }

                // only lowercase letters, numbers, and dashes
                if (!/^[a-z0-9-]+$/.test(value)) {
                    return 'Please only use lowercase letters, numbers, and dashes';
                }

                return true;
            },
            // use title to generate slug
            initial: (_, { title }) => title.replace(/ /g, '-').toLowerCase()
        },
        {
            type: 'multiselect',
            name: 'tags',
            instructions: false,
            message: 'What are the tags of the post?',
            choices: config.tags.map((tag) => ({ title: tag.name, value: tag.name })),
            // choices: config.tags.map((tag) => ({ title: tag.name, value: tag.slug })),
            min: 1,
            validate: (value) => value.length > 0 ? true : 'Please enter at least one tag',
        },
        {
            type: 'multiselect',
            name: 'categories',
            instructions: false,
            message: 'What is the category of the post?',
            min: 1,
            choices: config.categories.map((category) => ({ title: category.name, value: category.slug })),
            validate: (value) => value.length > 0 ? true : 'Please enter a category',
        },
        {
            type: 'date',
            name: 'date',
            message: 'What is the date of the post?',
            initial: new Date(),
            mask: 'YYYY-MM-DD',
            // validate: (value) => value.length > 0 ? true : 'Please enter a date',
        },
        // public folder?
        {
            type: 'toggle',
            name: 'assets',
            message: 'Does this post have assets?',
            initial: false,
            active: 'yes',
            inactive: 'no',
        },
    ], {onCancel(prompt, answers) {
        // console.log('onCancel', prompt, answers);
        console.log('Cancelled creating new post');
        process.exit(0);
    },});

    // create the file
    const content = `---
title: ${response.title}
description: ${response.description}
date: ${response.date.toISOString().split('T')[0]}
tags:
${response.tags.map((tag) => `  - ${tag}`).join('\n')}
categories:
${response.categories.map((category) => `  - ${category}`).join('\n')}
---
`;
    const path = `posts/${response.slug}.mdx`
    fs.writeFileSync(path, content);

    // open the file in vscode using the command line
    const { exec } = require('child_process');
    const lineNumber = content.split('\n').length;
    exec('code .')
    exec(`code -g ${path}:${lineNumber}`);
    console.info(`Created ${path}`);

    if (response.assets) {
        fs.mkdirSync(`public/p/${response.slug}`);
        // expand the assets folder in vscode
        // exec(`code -g public/${response.slug}`);
        console.info(`Created public/p/${response.slug}`);
    }

}

newPost();
