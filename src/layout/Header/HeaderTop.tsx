import { Col, Row, Input } from 'antd';
import { Link } from 'react-router-dom';

const { Search } = Input;

function HeaderTop() {
  const onSearch = (value: string) => console.log(value);
  return (
    <div className="header_top">
      <div className="container">

        <Row gutter={[16, 16]}>
          <Col md={12}>
            <div className="special_menu">
              <ul className="special_menu_links">
                <li className="special_menu_link">
                  <Link to={"/siteMap"}>
                    <i className="fa fa-sitemap"></i> <span>Sayt xaritasi</span>
                  </Link>
                </li>
                <li className="special_menu_link"><i className="fa fa-mobile"></i> <span>Mobil taqvim</span></li>
                <li className="special_menu_link"><i className="fa fa-eye"></i> <span>Zaif ko'ruvchilar uchun</span></li>
                <li className="special_menu_link"><i className="fa fa-volume-up"></i> <span>Ovozli o'qish</span></li>
              </ul>
            </div>
          </Col>
          <Col md={12}>
            <div className="right">
              <ul className="social_medias">
                <li className="social_media">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                </li>

                <li className="social_media">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
              <div className="search_area">
                <input type="search" placeholder="Sayt bo'ylab qidiruv" /><i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="language_area">
                <ul className="languages">
                  <li>
                    O'z
                  </li>
                  <li>
                    Ru
                  </li>
                  <li>
                    En
                  </li>

                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default HeaderTop