import React from 'react';

const PageHeader = ({ pageTitle }) => {
    const { title, subTitle } = pageTitle;
    return (
        <div className="page-header">
            <div className="title">
                <h1>{title}</h1>
            </div>
            {subTitle && (
                <div className="sub-title">
                    <h3>{subTitle}</h3>
                </div>
            )}
        </div>
    );
};

export default PageHeader;
