import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ActivityCalendar from 'react-activity-calendar';
import Marquee from 'react-fast-marquee';
import { FaJava, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";

function Activity() {
    const [data, setGithubData] = useState([]);

    useEffect(() => {
        async function fetchGithubContributions() {
            try {
                const response = await axios.get('https://api.github.com/users/Rohith32432/events');
                const contributions = response.data.filter(event => event.type === 'PushEvent' && event.created_at.startsWith('2024'));
                const formattedData = formatContributions(contributions);
                setGithubData(formattedData);
            } catch (error) {
                console.error('Error fetching GitHub contributions:', error);
            }
        }

        fetchGithubContributions();
    }, []);

    const formatContributions = (contributions) => {
        const formattedData = contributions.map(event => ({
            date: event.created_at.substr(0, 10), // Extracting date from timestamp
            count: 1, // Each push event counts as 1
            level: 1, // Adjust level according to your needs
        }));

        return formattedData;
    };

    const greenTheme = {
        light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#28a745', '#384259'], // Green color added for light mode
        dark: ['#383838', 'green', '#7DB9B6', '#fff', '#E96479'], // Green color added for dark mode
    };

    return (
        <>
            <Marquee pauseOnHover={true} direction='right'>
                <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
                    <FaJava size={100} />
                    <IoLogoJavascript size={100} />
                    <FaNode size={100} />
                    <FaReact size={100} />
                    <SiMongodb size={100} />
                </div>
            </Marquee>

            <ActivityCalendar data={data} theme={greenTheme} />
        </>
    );
}

export default Activity;
