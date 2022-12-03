import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import cardImg1 from '../images/homeCard1.png'
import cardImg2 from '../images/homeCard2.png'
import cardImg3 from '../images/homeCard3.png'
import Image from 'next/image'
import logo from '../images/swopfooter.png'
import phone from '../images/qrgeneratorphone.png'
import card1 from '../images/qr-genarator-card-image1.png'
import card2 from '../images/qr-genarator-card-image2.png'
import card3 from '../images/qr-genarator-card-image3.png'
import icon1 from '../images/wwwicon.png'
import icon2 from '../images/vcardicon.png'
import icon3 from '../images/socialicon.png'
import icon4 from '../images/docicon.png'
import icon5 from '../images/aticon.png'
import icon6 from '../images/wifiicon.png'
import icon7 from '../images/picicon.png'
import dropdown from '../images/dropdown.png'
import dropdownwhite from '../images/dropdownwhite.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const QrGenerator = () => {
  const appData = [
    {
      id: 1,
      title: 'Uniswap',
      titleDetails: 'Most usable dapps......',
      image: 'app1.png',
      icon: 'iconapp1.png',
    },
    {
      id: 2,
      title: 'Ethereum',
      titleDetails: 'Most usable dapps......',
      image: 'app2.png',
      icon: 'iconapp2.png',
    },
    {
      id: 2,
      title: 'Polygon',
      titleDetails: 'Most usable dapps......',
      image: 'app3.png',
      icon: 'iconapp3.png',
    },
  ]

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="qr-code-penel">
          <div className="qr-top-container">
            <div className="qr-top-first">
              <div className="qr-top-first-inside">
                <div>
                  <Image src={icon1} alt="icon_image" /> <p>Url</p>
                </div>
                <div>
                  <Image src={icon2} alt="icon_image" /> <p>Vcard</p>
                </div>
                <div>
                  <Image src={icon3} alt="icon_image" /> <p>Social Media</p>
                </div>
                <div>
                  <Image src={icon4} alt="icon_image" /> <p>Text</p>
                </div>
                <div>
                  <Image src={icon5} alt="icon_image" /> <p>Email</p>
                </div>
                <div>
                  <Image src={icon6} alt="icon_image" /> <p>Email</p>
                </div>
                <div>
                  <Image src={icon4} alt="icon_image" /> <p>Email</p>
                </div>
                <div>
                  <Image src={icon7} alt="icon_image" /> <p>Email</p>
                </div>
              </div>
              <div className="website-link">
                <input type="text" placeholder="Enter your website" />
                <p id="automatic-qr">(Your QR code generated automatically)</p>
              </div>
              <input type="file" /> <label>(JPG, PNG, JPEG)</label>
            </div>
            <div className="qr-top-second">
              <div className="qr-slider">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={false}
                  effect="coverflow"
                  loop={true}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 10,
                    modifier: 3,
                    slideShadows: false,
                  }}
                  slidesPerView={3.5}
                  spaceBetween={0}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  initialSlide={0.9}
                  style={{
                    width: '100%',
                    margin: 'auto',
                    padding: '10px',
                    justifyContent: 'center',
                  }}
                >
                  {appData.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="qr-card">
                        <Image
                          src={`/${item.image}`}
                          alt="no_image"
                          width={300}
                          height={300}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="qr-frame">
                <h5>FRAME</h5>{' '}
                <Image
                  src={dropdownwhite}
                  alt="dropdown"
                  height={28}
                  width={28}
                />
              </div>
              <div className="qr-shape">
                <h5>SHAPE & COLOR</h5>{' '}
                <Image src={dropdown} alt="dropdown" height={11} width={11} />
              </div>
              <div className="qr-logo">
                <h5>LOGO</h5>{' '}
                <Image src={dropdown} alt="dropdown" height={11} width={11} />
              </div>
            </div>
          </div>
        </div>
        <div className="home-how-it-work">
          <h2>HOW TO CUSTOMIZE A NFC</h2>
          <p>
            Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
            use. The Flat is great to put under any phone case(non-metal) Users
            can
            <br />
            download our app to program any of our NFC’s with the click of a
            button. This will attach your profile to the NFC for easy sharing.
            <br />
            You just tap the NFC on any compatible phone to share your digital
            business card, microsite, crypto address,
            <br />
            the possibilities are endless. Use the swop app to.
          </p>
          <div className="background-level"></div>
          <div className="row-div">
            <div className="col-4">
              <div className="card-how-it">
                <Image src={cardImg1} alt="no_image" width={360} height={540} />
                <h5>Upload logo for your profile</h5>
                <p>
                  Personlize the look of your digital business card. Add all of
                  your contact information.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card-how-it">
                <Image src={cardImg2} alt="no_image" width={360} height={540} />
                <h5>Confirm Design with our personal designer</h5>
                <p>
                  Device is made simple so you can get to connecting faster than
                  ever before.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card-how-it">
                <Image src={cardImg3} alt="no_image" width={360} height={540} />
                <h5>We Print and ship your NFC </h5>
                <p>
                  With a single tap you'll be able to transfer your dot.Profile
                  and begin connecting with style.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="qr-generator-bottom">
          <h2>SWOP SERVICE</h2>
          <p id="qr-space-between">
            Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
            use. The Flat is great to put under any phone case(non-metal) Users
            can
            <br />
            download our app to program any of our NFC’s with the click of a
            button. This will attach your profile to the NFC for easy sharing.
            <br />
            You just tap the NFC on any compatible phone to share your digital
            business card, microsite, crypto address,
            <br />
            the possibilities are endless. Use the swop app to.
          </p>
          <div className="row-div">
            <div className="col-6">
              <div className="qr-generator-background">
                <Image src={logo} alt="swop-image" height={48} width={230} />
                <label>
                  Instantly share everything with a One time purchase of a SWOP
                  device.
                </label>
                <div className="row-div qr-custom-margin">
                  <div className="col-6">
                    <Image
                      src={phone}
                      alt="phone_image"
                      height={703}
                      width={464}
                      id="phone_image"
                    />
                  </div>
                  <div className="col-6">
                    <p className="qr-generator-custom-text1">
                      <span>An Elegant place</span> to
                      <br />
                      share all of your
                      <br />
                      contct info.
                    </p>
                    <p className="qr-generator-custom-text2">
                      <span>Customize the QR for</span>
                      <br />
                      your profile with
                      <br />
                      <span id="rainbow-text">COLORFUL QR</span>
                    </p>
                    <p className="qr-generator-custom-text3">
                      Collect the leads to
                      <br />
                      up{' '}
                      <span>
                        simple form
                        <br />
                        and save.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 qr-justify">
              <div className="qr-generator-double qr-crd-1">
                <h4>One Card.</h4>
                <h6>A life full of connecting.</h6>
                <div className="qr-card-container">
                  <Image
                    src={card1}
                    alt="card_image"
                    className="qr_card-image image-first-qr"
                  />
                  <Image
                    src={card2}
                    alt="card_image"
                    className="qr_card-image"
                  />
                  <Image
                    src={card3}
                    alt="card_image"
                    className="qr_card-image image-last-qr"
                  />
                </div>
              </div>
              <div className="qr-generator-double qr-generator-double-bottom">
                <label>
                  Instantly share your contact info, Social accounts, Music,
                  Payment info & More...
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default QrGenerator