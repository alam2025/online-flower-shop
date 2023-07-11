
import { Navbar, Dropdown, Avatar } from "flowbite-react"
import Banner from "./Home/Banner"
import FestureFlower from "./Home/FestureFlower"
import Offer from "./Home/Offer/Offer"
import Instagram from "./Home/Instagram/Instagram"
import Contact from "./Home/Contact/Contact"
import Footer from "./Home/Footer/Footer"


function App() {


  return (
    <>


      <Navbar
        fluid
        rounded
      >
        <Navbar.Brand >

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            inline
            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">
                Bonnie Green
              </span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item>
              Settings
            </Dropdown.Item>
            <Dropdown.Item>
              Earnings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              Sign out
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            active
            href="#"
          >
            <p>
              Home
            </p>
          </Navbar.Link>
          <Navbar.Link href="#">
            About
          </Navbar.Link>
          <Navbar.Link href="#">
            Services
          </Navbar.Link>
          <Navbar.Link href="#">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="#">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <Banner></Banner>
      <FestureFlower></FestureFlower>
      <Offer></Offer>
      <Instagram></Instagram>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
