interface PageTitleProps {
    title: string;
    subTitle: string;
}
interface Props {
    pageTitle: PageTitleProps;
}

const PageHeader = ({ pageTitle }: Props) => {
    const { title, subTitle } = pageTitle;
    return (
        <div className="page-header">
            <div className="title">
                <h1>{title}</h1>
            </div>
            {subTitle && <div className="sub-title">{subTitle}</div>}
        </div>
    );
};

export default PageHeader;
