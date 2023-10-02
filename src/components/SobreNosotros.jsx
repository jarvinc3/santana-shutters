import { useState } from 'react';

function SobreNosotros() {
    const [activeTab, setActiveTab] = useState('profile');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const tabStyle = (tabId) => {
        return activeTab === tabId
            ? 'inline-block p-4 border-b-2 rounded-t-lg'
            : 'inline-block p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300';
    };

    return (
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" role="tablist">
                <li className="mr-2" role="presentation">
                    <button
                        className={tabStyle('profile')}
                        onClick={() => handleTabClick('profile')}
                        role="tab"
                        aria-controls="profile"
                        aria-selected={activeTab === 'profile'}
                    >
                        Profile
                    </button>
                </li>
                <li className="mr-2" role="presentation">
                    <button
                        className={tabStyle('dashboard')}
                        onClick={() => handleTabClick('dashboard')}
                        role="tab"
                        aria-controls="dashboard"
                        aria-selected={activeTab === 'dashboard'}
                    >
                        Dashboard
                    </button>
                </li>
                <li className="mr-2" role="presentation">
                    <button
                        className={tabStyle('settings')}
                        onClick={() => handleTabClick('settings')}
                        role="tab"
                        aria-controls="settings"
                        aria-selected={activeTab === 'settings'}
                    >
                        Settings
                    </button>
                </li>
                <li role="presentation">
                    <button
                        className={tabStyle('contacts')}
                        onClick={() => handleTabClick('contacts')}
                        role="tab"
                        aria-controls="contacts"
                        aria-selected={activeTab === 'contacts'}
                    >
                        Contacts
                    </button>
                </li>
            </ul>
            <div id="myTabContent">
                <div
                    className={`${
                        activeTab === 'profile' ? '' : 'hidden'
                    } p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        This is some placeholder content the{' '}
                        <strong className="font-medium text-gray-800 dark:text-white">Profile tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
                    </p>
                </div>
                <div
                    className={`${
                        activeTab === 'dashboard' ? '' : 'hidden'
                    } p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
                    id="dashboard"
                    role="tabpanel"
                    aria-labelledby="dashboard-tab"
                >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        This is some placeholder content the{' '}
                        <strong className="font-medium text-gray-800 dark:text-white">Dashboard tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
                    </p>
                </div>
                <div
                    className={`${
                        activeTab === 'settings' ? '' : 'hidden'
                    } p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
                    id="settings"
                    role="tabpanel"
                    aria-labelledby="settings-tab"
                >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        This is some placeholder content the{' '}
                        <strong className="font-medium text-gray-800 dark:text-white">Settings tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
                    </p>
                </div>
                <div
                    className={`${
                        activeTab === 'contacts' ? '' : 'hidden'
                    } p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
                    id="contacts"
                    role="tabpanel"
                    aria-labelledby="contacts-tab"
                >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        This is some placeholder content the{' '}
                        <strong className="font-medium text-gray-800 dark:text-white">Contacts tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SobreNosotros