import styles from '../styles/Sidebar.module.css'
import { useState } from 'react';

class section {
    title: string;
    constructor(title: string) {
        this.title = title;
    }
}

interface SidebarProps {
    sections: section[];
}

export default function Sidebar(sections: SidebarProps) {
    const [active, setActive] = useState(0);
    const handleClick = (index: number) => {
        setActive(index);
        console.log(index);
    }

    return(
        <div className={styles.container}>
            {sections.sections.map((section, index) => (
                <div key={index} className={styles.section} onClick={() => handleClick(index)} style={active === index ? {backgroundColor: "#e5e5e5"} : {}}>
                    <h3>{section.title}</h3>
                </div>
            ))}
        </div>
    )
}