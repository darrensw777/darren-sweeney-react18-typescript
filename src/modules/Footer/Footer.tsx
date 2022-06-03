import { companyInfo } from 'utils/config';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer" role="contentinfo">
            <div className="inner-content">
                <div className="copyright">
                    &copy;{currentYear} {companyInfo.name}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
