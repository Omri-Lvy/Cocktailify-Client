import React from 'react';
import {communityLinks, platformLinks, resourcesLinks} from "../../constants";

const Footer = () => {
    const LinksRender = (items) => (
        items.map((link, index) => (
            <li key={index}>
                <a href={link.href} className="text-neutral-300 hover:text-neutral-50">{link.text}</a>
            </li>
        ))
    )

    return (
        <footer className="mt-20 border-t py-10 border-slate-700">
            <div className="flex flex-row flex-wrap gap-8 px-12 justify-between md:justify-evenly">
                <div>
                    <h3 className="text-md font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        {LinksRender(resourcesLinks)}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Platform</h3>
                    <ul className="space-y-2">
                        {LinksRender(platformLinks)}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Community</h3>
                    <ul className="space-y-2">
                        {LinksRender(communityLinks)}
                    </ul>
                </div>
            </div>

        </footer>
    );
};

export default Footer;