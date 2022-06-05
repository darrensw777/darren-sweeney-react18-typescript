import { companyInfo } from 'utils/config';
import { FooterWrapper } from 'modules/moduleStyles'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <FooterWrapper>
            <div className="footer" role="contentinfo">
                <div className="inner-content">
                    <div className="copyright">
                        &copy;{currentYear} {companyInfo.name}
                    </div>
                </div>
            </div>
        </FooterWrapper>
    );
};

export default Footer;
