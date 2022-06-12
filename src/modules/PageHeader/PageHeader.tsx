import { PageHeaderWrapper } from 'modules/moduleStyles'
import { ReactElement } from 'react';
import { PageHeaderProps } from 'utils/interfaces';

const PageHeader = ({ pageTitle }: PageHeaderProps): ReactElement => {
    const { title, subTitle } = pageTitle;
    return (
        <PageHeaderWrapper>
            <div className="page-header">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                {subTitle && <div className="sub-title">{subTitle}</div>}
            </div>
        </PageHeaderWrapper>
    );
};

export default PageHeader;
