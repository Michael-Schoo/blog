'use client';

export default function CopyCodeButton({ children }: { children: React.ReactNode }) {
    function copyCode(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const code = event.currentTarget.parentElement.querySelector('pre').innerText;
        navigator.clipboard.writeText(code);
    }

    return (
        <div className="highlight">
            <pre>
                {children}
            </pre>
            <button className="copyCodeButton" onClick={copyCode}>Copy</button>
        </div>
    )
}