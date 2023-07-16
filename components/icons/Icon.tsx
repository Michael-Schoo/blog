import ArchiveIcon from "./Archive";
import CalendarIcon from "./Calendar";
import ClockIcon from "./Clock";
import GitHubIcon from "./GitHub";
import HashIcon from "./Hash";
import HomeIcon from "./Home";
import InfinityIcon from "./Infinity";
import SearchIcon from "./Search";
import TagIcon from "./Tag";
import UserIcon from "./User";

export default function GetIcon({iconName}: {iconName: string}) {
    switch (iconName) {
        case 'archive':
            return <ArchiveIcon />;
        case 'calendar':
            return <CalendarIcon />;
        case 'clock':
            return <ClockIcon />;
        case 'github':
            return <GitHubIcon />;
        case 'hash':
            return <HashIcon />;
        case 'home':
            return <HomeIcon />;
        case 'infinity':
            return <InfinityIcon />;
        case 'search':
            return <SearchIcon />;
        case 'tag':
            return <TagIcon />;
        case 'user':
            return <UserIcon />;
        default:
            console.error(`Unknown icon name: ${iconName}`);
            return <></>;

    }
}
