import React from "react";
import "./Header.css";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import {Input} from "antd";
import {Button} from "antd";
import {makeStyles} from "@material-ui/core/styles";
import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import {Dropdown} from "antd";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";

function Header() {
  const [{basket, user}, dispatch] = useStateValue();
  const {Search} = Input;
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const useIcons = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(0.6),
      },
    },
  }));
  const classes = useStyles();
  const classes_icon = useIcons();
  const classes_icon_mob = useIcons();
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorEl, setAnchorE1] = React.useState(null);

  const handleClick = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const {SubMenu} = Menu;
  const menu0 = (
    <Menu>
      <Link to="/login">
      <Menu.Item className='mob_menu_text'>
        <img
          className="icons"
          src="https://www.flaticon.com/svg/static/icons/svg/1738/1738691.svg"
        ></img>
        My Account
      </Menu.Item>
      </Link>
      <Menu.Item> Help</Menu.Item>
      <Menu.Item>Store Locations</Menu.Item>
      <Menu.Item> Contact Us</Menu.Item>
    </Menu>
  );
  const menu00 = (
    <Menu>
      <Link to="/login">
      <Menu.Item className='mob_menu_text'>
        <img
          className="icons"
          src="https://www.flaticon.com/svg/static/icons/svg/1738/1738691.svg"
        ></img>
        My Account
      </Menu.Item>
      </Link>
      <Menu.Item> Help</Menu.Item>
      <Menu.Item>Store Locations</Menu.Item>
      <Menu.Item> Contact Us</Menu.Item>
    </Menu>
  );
  const menu1 = (
   
    <Menu>
    <Link to="/womens" >
    <Menu.Item  className='sub_menu_text' > ALL PRODUCTS</Menu.Item>
    </Link>
    <Link to="/womens-new" >
      <Menu.Item className='sub_menu_text' > NEW IN</Menu.Item>
      </Link>
      <Menu.Item> TRENDING</Menu.Item>
      <Menu.Item> WEDDING WEAR</Menu.Item>
      <SubMenu title="CLOTHING">
        <Menu.Item>Blouses & Shirts</Menu.Item>
        <Menu.Item>Coats & Jackets</Menu.Item>
        <Menu.Item>Dresses</Menu.Item>
        <Menu.Item>Hoodies & Sweatshirts</Menu.Item>
        <Menu.Item>Jeans</Menu.Item>
        <Menu.Item>Saree</Menu.Item>
        <Menu.Item>Jumpers & Cardigans</Menu.Item>
        <Menu.Item>Jumpsuits & Playsuits</Menu.Item>
        <Menu.Item>Loungewear</Menu.Item>
        <Menu.Item>Shorts</Menu.Item>
        <Menu.Item>Skirts</Menu.Item>
        <Menu.Item>Sportswear</Menu.Item>
        <Menu.Item>Shalwar Kameez</Menu.Item>
        <Menu.Item>Kurtis</Menu.Item>
        <Menu.Item>Suits & Workwear</Menu.Item>
        <Menu.Item>Swim & Beachwear</Menu.Item>
        <Menu.Item>Tops & T-Shirts</Menu.Item>
        <Menu.Item>Trousers & Leggings</Menu.Item>
        <Menu.Item>Unstitched Fabric</Menu.Item>
        <Menu.Item>Shop All</Menu.Item>
      </SubMenu>
      <SubMenu title="LINGERIE & NIGHTWEAR">
        <Menu.Item>Lingerie</Menu.Item>
        <Menu.Item>All Bras</Menu.Item>
        <Menu.Item>All Knickers</Menu.Item>
        <Menu.Item>Dressing Gowns</Menu.Item>
        <Menu.Item>Pyjamas & Nightwear</Menu.Item>
        <Menu.Item>Slippers</Menu.Item>
        <Menu.Item>Socks & Tights</Menu.Item>
      </SubMenu>
      <SubMenu title="BEAUTY">
        <Menu.Item>Skin Care</Menu.Item>
        <Menu.Item>Make Up</Menu.Item>
        <Menu.Item>Fragrance</Menu.Item>
      </SubMenu>
      <SubMenu title="SHOES">
        <Menu.Item>All Shoes & Boots</Menu.Item>
        <Menu.Item>Boots</Menu.Item>
        <Menu.Item>Flats</Menu.Item>
        <Menu.Item>Heels</Menu.Item>
        <Menu.Item>Sandals</Menu.Item>
        <Menu.Item>Trainers</Menu.Item>
        <Menu.Item>Wedges & Flatforms</Menu.Item>
      </SubMenu>
      <SubMenu title="ACCESSORIES">
        <Menu.Item>All Accessories</Menu.Item>
        <Menu.Item>Bags, Purses & Luggage</Menu.Item>
        <Menu.Item>Hats, Gloves & Scarves</Menu.Item>
        <Menu.Item>Jewellery & Watches</Menu.Item>
        <Menu.Item>Sunglasses</Menu.Item>
        <Menu.Item>Travel and Luggage</Menu.Item>
      </SubMenu>
      <SubMenu title="SHOP BY BRAND">
        <Menu.Item>A-Z Brands</Menu.Item>
        <Menu.Item>New In</Menu.Item>
        <Menu.Item>Adidas</Menu.Item>
        <Menu.Item>Converse</Menu.Item>
        <Menu.Item>FatFace</Menu.Item>
        <Menu.Item>Label Mix</Menu.Item>
        <Menu.Item>Lipsy</Menu.Item>
        <Menu.Item>Mint Velvet</Menu.Item>
        <Menu.Item>Nike</Menu.Item>
        <Menu.Item>Pour Moi</Menu.Item>
        <Menu.Item>Quiz</Menu.Item>
        <Menu.Item>Regatta</Menu.Item>
        <Menu.Item>REISS</Menu.Item>
        <Menu.Item>River Island</Menu.Item>
        <Menu.Item>Skechers</Menu.Item>
        <Menu.Item>Superdry</Menu.Item>
      </SubMenu>
    </Menu>
    
  );
  const menu2 = (
    
    <Menu > 
      <Link to="/mens" >
    <Menu.Item  className='sub_menu_text' > ALL PRODUCTS</Menu.Item>
    </Link>
    <Link to="/mens-new" >
      <Menu.Item  className='sub_menu_text'> NEW IN</Menu.Item>
      </Link>
      <Menu.Item> TRENDING</Menu.Item>
      <SubMenu title="CLOTHING">
        <Menu.Item>Coords</Menu.Item>
        <Menu.Item>Panjabi & Fatua</Menu.Item>
        <Menu.Item>Jackets & Coats</Menu.Item>
        <Menu.Item>Jeans</Menu.Item>
        <Menu.Item>Joggers</Menu.Item>
        <Menu.Item>Jumpers & Cardigans</Menu.Item>
        <Menu.Item>Pyjamas & Nightwear</Menu.Item>
        <Menu.Item>Shirts</Menu.Item>
        <Menu.Item>Shorts & Swimwear</Menu.Item>
        <Menu.Item>Socks</Menu.Item>
        <Menu.Item>Sportswear</Menu.Item>
        <Menu.Item>Sweatshirts & Hoodies</Menu.Item>
        <Menu.Item>Trousers & Chinos</Menu.Item>
        <Menu.Item>T-Shirts & Polos</Menu.Item>
        <Menu.Item>Underwear</Menu.Item>
        <Menu.Item>Vests</Menu.Item>
        <Menu.Item>Big & Tall & T-Shirts</Menu.Item>
        <Menu.Item>Shop All</Menu.Item>
      </SubMenu>
      <SubMenu title="SUITS & FORMALWEAR">
        <Menu.Item>Blazer & Formal Jackets</Menu.Item>
        <Menu.Item>Formal Shirts</Menu.Item>
        <Menu.Item>Formal Trousers</Menu.Item>
        <Menu.Item>Suits</Menu.Item>
        <Menu.Item>Ties & Pocket Squares</Menu.Item>
        <Menu.Item>Waistcoats</Menu.Item>
      </SubMenu>
      <SubMenu title="FOOTWEAR">
        <Menu.Item>All Footwear</Menu.Item>
        <Menu.Item>Boots</Menu.Item>
        <Menu.Item>Loafers</Menu.Item>
        <Menu.Item>Sandals, Sliders & Flipflops</Menu.Item>
        <Menu.Item>Shoes</Menu.Item>
        <Menu.Item>Slippers</Menu.Item>
        <Menu.Item>Smart Shoes</Menu.Item>
        <Menu.Item>Sports Trainers</Menu.Item>
        <Menu.Item>Trainers</Menu.Item>
      </SubMenu>
      <SubMenu title="ACCESSORIES">
        <Menu.Item>All Accessories</Menu.Item>
        <Menu.Item>Bags</Menu.Item>
        <Menu.Item>Belts & Braces</Menu.Item>
        <Menu.Item>Cufflinks & Tie Clips</Menu.Item>
        <Menu.Item>Face Coverings</Menu.Item>
        <Menu.Item>Fragrance & Grooming</Menu.Item>
        <Menu.Item>Gifts & Gadgets</Menu.Item>
        <Menu.Item>Hats, Scarves & Gloves</Menu.Item>
        <Menu.Item>Luggage & Travel Accessories</Menu.Item>
        <Menu.Item>Sunglasses</Menu.Item>
        <Menu.Item>Wallets</Menu.Item>
        <Menu.Item>Watches</Menu.Item>
      </SubMenu>
      <SubMenu title="SHOP BY BRAND">
        <Menu.Item>A-Z Brands</Menu.Item>
        <Menu.Item>New In</Menu.Item>
        <Menu.Item>Adidas</Menu.Item>
        <Menu.Item>Barbour</Menu.Item>
        <Menu.Item>Calvin Klein</Menu.Item>
        <Menu.Item>Hugo Boss</Menu.Item>
        <Menu.Item>Lacoste</Menu.Item>
        <Menu.Item>Levi's</Menu.Item>
        <Menu.Item>Lyle & Scott</Menu.Item>
        <Menu.Item>Nike</Menu.Item>
        <Menu.Item>Ralph Lauren</Menu.Item>
        <Menu.Item>REISS</Menu.Item>
        <Menu.Item>Superdry</Menu.Item>
        <Menu.Item>Tommy Hilfiger</Menu.Item>
        <Menu.Item>Under Armour</Menu.Item>
      </SubMenu>
     
    </Menu>
    
    
  );
  const menu3 = (
    <Menu>
      <Menu.Item> NEW IN</Menu.Item>
      <SubMenu title="CLOTHING">
        <Menu.Item>Bodysuits</Menu.Item>
        <Menu.Item>Coats & Jackets</Menu.Item>
        <Menu.Item>Jeans</Menu.Item>
        <Menu.Item>Panjabi & Fatua</Menu.Item>
        <Menu.Item>Joggers</Menu.Item>
        <Menu.Item>Knitwear</Menu.Item>
        <Menu.Item>Nightwear & Pyjamas</Menu.Item>
        <Menu.Item>Schoolwear</Menu.Item>
        <Menu.Item>Sets & Outfits</Menu.Item>
        <Menu.Item>Shirts</Menu.Item>
        <Menu.Item>Shorts</Menu.Item>
        <Menu.Item>Sleepsuits & Babygrows</Menu.Item>
        <Menu.Item>Sleep Bags</Menu.Item>
        <Menu.Item>Socks</Menu.Item>
        <Menu.Item>Sportswear</Menu.Item>
        <Menu.Item>Suits & Waistcoats</Menu.Item>
        <Menu.Item>Sweatshirts & Hoodies</Menu.Item>
        <Menu.Item>Swim & Beach</Menu.Item>
        <Menu.Item>Tops, T-Shirts & Polos</Menu.Item>
        <Menu.Item>Tracksuits</Menu.Item>
        <Menu.Item>Trousers & Chinos</Menu.Item>
        <Menu.Item>Underwear</Menu.Item>
      </SubMenu>
      <SubMenu title="SHOES & ACCESSORIES">
        <Menu.Item>Bags & Accessories</Menu.Item>
        <Menu.Item>Hats, Gloves & Scarves</Menu.Item>
        <Menu.Item>Shoes & Boots</Menu.Item>
      </SubMenu>
      <SubMenu title="BROWSE BY AGE">
        <Menu.Item>0-2yrs</Menu.Item>
        <Menu.Item>3-5yrs</Menu.Item>
        <Menu.Item>6-9yrs</Menu.Item>
        <Menu.Item>10-16yrs</Menu.Item>
      </SubMenu>
      <SubMenu title="BROWSE BY RANGE">
        <Menu.Item>Baby Boys 0mths-2yrs</Menu.Item>
        <Menu.Item>Younger Boys 3mths-7yrs</Menu.Item>
        <Menu.Item>Older Boys 3yrs-16yrs</Menu.Item>
        <Menu.Item>Baby Unisex 0mths-2yrs</Menu.Item>
      </SubMenu>
      <SubMenu title="SHOP BY BRAND">
        <Menu.Item>A-Z Brands</Menu.Item>
        <Menu.Item>New In</Menu.Item>
        <Menu.Item>Adidas</Menu.Item>
        <Menu.Item>Converse</Menu.Item>
        <Menu.Item>Hype</Menu.Item>
        <Menu.Item>Nike</Menu.Item>
        <Menu.Item>Regatta</Menu.Item>
        <Menu.Item>The North Face</Menu.Item>
        <Menu.Item>Tommy Hilfiger</Menu.Item>
      </SubMenu>
      
    </Menu>
  );
  const menu4 = (
    <Menu>
      <Menu.Item> NEW IN</Menu.Item>
      <Menu.Item> Trending</Menu.Item>
      <SubMenu title="CLOTHING">
        <Menu.Item>Bodysuits</Menu.Item>
        <Menu.Item>Coats & Jackets</Menu.Item>
        <Menu.Item>Panjabi & Fatua</Menu.Item>
        <Menu.Item>Dresses</Menu.Item>
        <Menu.Item>Saree</Menu.Item>
        <Menu.Item>Jeans</Menu.Item>
        <Menu.Item>Jumpsuits & Playsuits</Menu.Item>
        <Menu.Item>Knitwear</Menu.Item>
        <Menu.Item>Knitwear</Menu.Item>
        <Menu.Item>Shalwar Kameez</Menu.Item>
        <Menu.Item>Kurtis</Menu.Item>
        <Menu.Item>Nightwear & Pyjamas</Menu.Item>
        <Menu.Item>Schoolwear</Menu.Item>
        <Menu.Item>Sets & Outfits</Menu.Item>
        <Menu.Item>Shorts & Skirts</Menu.Item>
        <Menu.Item>Sleepsuits & Babygrows</Menu.Item>
        <Menu.Item>Sleep Bags</Menu.Item>
        <Menu.Item>Socks & Tights</Menu.Item>
        <Menu.Item>Sportswear</Menu.Item>
        <Menu.Item>Sweatshirts & Hoodies</Menu.Item>
        <Menu.Item>Swim & Beach</Menu.Item>
        <Menu.Item>Tops, T-Shirts & Shirts</Menu.Item>
        <Menu.Item>Trousers & Leggings</Menu.Item>
        <Menu.Item>Underwear</Menu.Item>
        <Menu.Item>Shop All</Menu.Item>
      </SubMenu>
      <SubMenu title="SHOES & ACCESSORIES">
        <Menu.Item>Bags & Accessories</Menu.Item>
        <Menu.Item>Hats, Gloves & Scarves</Menu.Item>
        <Menu.Item>Shoes & Boots</Menu.Item>
      </SubMenu>
      <SubMenu title="BROWSE BY AGE">
        <Menu.Item>0-2yrs</Menu.Item>
        <Menu.Item>3-5yrs</Menu.Item>
        <Menu.Item>6-9yrs</Menu.Item>
        <Menu.Item>10-16yrs</Menu.Item>
      </SubMenu>
      <SubMenu title="BROWSE BY RANGE">
        <Menu.Item>Baby Girls 0mths-2yrs</Menu.Item>
        <Menu.Item>Younger Girls 3mths-7yrs</Menu.Item>
        <Menu.Item>Older Girls 3yrs-16yrs</Menu.Item>
        <Menu.Item>Baby Unisex 0mths-2yrs</Menu.Item>
      </SubMenu>
      <SubMenu title="SHOP BY BRAND">
      <Menu.Item>A-Z Brands</Menu.Item>
        <Menu.Item>New In</Menu.Item>
        <Menu.Item>Adidas</Menu.Item>
        <Menu.Item>Baker by Ted Baker</Menu.Item>
        <Menu.Item>Hype</Menu.Item>
        <Menu.Item>Lipsy Girl</Menu.Item>
        <Menu.Item>Monsoon</Menu.Item>
        <Menu.Item>Nike</Menu.Item>
        <Menu.Item>River Island</Menu.Item>
      </SubMenu>
    </Menu>
  );
  const menu5 = (
    <Menu>
      <Menu.Item> NEW IN</Menu.Item>
      <SubMenu title="CLOTHING">
        <Menu.Item>All Baby Girls</Menu.Item>
        <Menu.Item>All Baby Boys</Menu.Item>
        <Menu.Item>Accessories</Menu.Item>
        <Menu.Item>Bodysuits</Menu.Item>
        <Menu.Item>Coats, Jackets & Pramsuits</Menu.Item>
        <Menu.Item>Dresses</Menu.Item>
        <Menu.Item>Hats & Scratch Mitts</Menu.Item>
        <Menu.Item>Joggers</Menu.Item>
        <Menu.Item>Knitwear & Jumpers</Menu.Item>
        <Menu.Item>Rompersuits & Dungarees</Menu.Item>
        <Menu.Item>Sets & Coords</Menu.Item>
        <Menu.Item>Shoes</Menu.Item>
        <Menu.Item>Shorts</Menu.Item>
        <Menu.Item>Sleepsuits & Babygrows</Menu.Item>
        <Menu.Item>Swim & Beach</Menu.Item>
        <Menu.Item>Sleepsuits & Babygrows</Menu.Item>
        <Menu.Item>Swim & Beach</Menu.Item>
        <Menu.Item>Socks</Menu.Item>
        <Menu.Item>Tights</Menu.Item>
        <Menu.Item>Tops</Menu.Item>
        <Menu.Item>Trousers & Leggings</Menu.Item>
        <Menu.Item>Shop All</Menu.Item>
      </SubMenu>
      <SubMenu title="SHOP BY AGE">
        <Menu.Item>Tiny Baby</Menu.Item>
        <Menu.Item>0-3 Months</Menu.Item>
        <Menu.Item>3-6 Months</Menu.Item>
        <Menu.Item>6-9 Months</Menu.Item>
        <Menu.Item>9-12 Months</Menu.Item>
        <Menu.Item>12-18 Months</Menu.Item>
      </SubMenu>
      <SubMenu title="MATERNITY">
        <Menu.Item>All Maternity</Menu.Item>
        <Menu.Item>All Nursing</Menu.Item>
      </SubMenu>
      <SubMenu title="NURSERY">
        <Menu.Item>Accessories</Menu.Item>
        <Menu.Item>Bedding</Menu.Item>
        <Menu.Item>Blankets</Menu.Item>
        <Menu.Item>Cots</Menu.Item>
        <Menu.Item>Furniture</Menu.Item>
        <Menu.Item>Sleep Bags</Menu.Item>
        <Menu.Item>Toddler Bedding</Menu.Item>
        <Menu.Item>All Nursery</Menu.Item>
      </SubMenu>
      <SubMenu title="TOYS">
      <Menu.Item>Toys</Menu.Item>
        <Menu.Item>Teddies</Menu.Item>
        <Menu.Item>Comforters</Menu.Item>
        <Menu.Item>Shop All</Menu.Item>
      </SubMenu>
      <SubMenu title="TRAVEL & FEEDING">
      <Menu.Item>Bibs & Muslin Squares</Menu.Item>
        <Menu.Item>Car Seats</Menu.Item>
        <Menu.Item>Changing Bags</Menu.Item>
        <Menu.Item>Highchairs</Menu.Item>
        <Menu.Item>Pushchairs & Prams</Menu.Item>
        <Menu.Item>Pram Accessories</Menu.Item>
        <Menu.Item>Shop All</Menu.Item>
      </SubMenu>
      <SubMenu title="SKINCARE">
      <Menu.Item>Bath Time</Menu.Item>
        <Menu.Item>Gift Sets</Menu.Item>
        <Menu.Item>Moisturisers & Lotions</Menu.Item>
        <Menu.Item>Sleep</Menu.Item>
      </SubMenu>
      <SubMenu title="SHOP BY BRAND">
      <Menu.Item>A-Z Brands</Menu.Item>
        <Menu.Item>New In</Menu.Item>
        <Menu.Item>Bloom & Blossom</Menu.Item>
        <Menu.Item>Boden</Menu.Item>
        <Menu.Item>Child's Farm</Menu.Item>
        <Menu.Item>Cosatto</Menu.Item>
        <Menu.Item>Mamas & Papas</Menu.Item>
        <Menu.Item>Monsoon</Menu.Item>
        <Menu.Item>Ralph Lauren</Menu.Item>
        <Menu.Item>Moncler Enfant</Menu.Item>
      </SubMenu>
    </Menu>
  );
  const menu6 = (
    <Menu>
      <Menu.Item> NEW IN</Menu.Item>
      <Menu.Item> NEW BRA SIZE CALCULATOR</Menu.Item>
      <SubMenu title="KNICKERS">
        <Menu.Item>All Knickers</Menu.Item>
        <Menu.Item>3 for 2 Knickers</Menu.Item>
        <Menu.Item>Bikini</Menu.Item>
        <Menu.Item>High Leg</Menu.Item>
        <Menu.Item>High Rise</Menu.Item>
        <Menu.Item>Midi</Menu.Item>
        <Menu.Item>Multipacks</Menu.Item>
        <Menu.Item>No VPL</Menu.Item>
        <Menu.Item>Shorts</Menu.Item>
        <Menu.Item>Thongs</Menu.Item>
      </SubMenu>
      <SubMenu title="BRAS">
        <Menu.Item>All Bras</Menu.Item>
        <Menu.Item>Bralettes</Menu.Item>
        <Menu.Item>Bodies</Menu.Item>
        <Menu.Item>Comfort Bras</Menu.Item>
        <Menu.Item>Cotton Bras</Menu.Item>
        <Menu.Item>DD+</Menu.Item>
        <Menu.Item>Lace & Embroidery Bras</Menu.Item>
        <Menu.Item>Maternity & Nursing Bras</Menu.Item>
        <Menu.Item>Multipack Bras</Menu.Item>
        <Menu.Item>Non Padded</Menu.Item>
        <Menu.Item>Non Wired</Menu.Item>
        <Menu.Item>Push Up Bras</Menu.Item>
        <Menu.Item>Strapless & Multiway</Menu.Item>
        <Menu.Item>Sports Bras</Menu.Item>
        <Menu.Item>T-Shirt Bras</Menu.Item>
      </SubMenu>
      <SubMenu title="SHAPEWEAR">
        <Menu.Item>All Shapewear</Menu.Item>
        <Menu.Item>Shaping Bodies</Menu.Item>
        <Menu.Item>Shaping Knickers</Menu.Item>
        <Menu.Item>Shaping Slips</Menu.Item>
      </SubMenu>
      <SubMenu title="NIGHTWEAR & LOUNGEWEAR">
        <Menu.Item>All Nightwear & Loungewear</Menu.Item>
        <Menu.Item>Cosy Shop</Menu.Item>
        <Menu.Item>Dressing Gowns</Menu.Item>
        <Menu.Item>Loungewear</Menu.Item>
        <Menu.Item>Thermals & Vests</Menu.Item>
        <Menu.Item>Nighties & Slips</Menu.Item>
        <Menu.Item>Pyjamas</Menu.Item>
        <Menu.Item>Slippers</Menu.Item>
        <Menu.Item>Socks & Tights</Menu.Item>
      </SubMenu>
      <SubMenu title="SHOP BY BRAND">
      <Menu.Item>A-Z Brands</Menu.Item>
        <Menu.Item>New In</Menu.Item>
        <Menu.Item>Boux Avenue</Menu.Item>
        <Menu.Item>Calvin Klein</Menu.Item>
        <Menu.Item>Dorina</Menu.Item>
        <Menu.Item>Fantasie</Menu.Item>
        <Menu.Item>Figleaves</Menu.Item>
        <Menu.Item>Panache</Menu.Item>
        <Menu.Item>Pour Moi</Menu.Item>
        <Menu.Item>Shock Absober</Menu.Item>
        <Menu.Item>Sloggi</Menu.Item>
        <Menu.Item>Spanx</Menu.Item>
        <Menu.Item>Triumph</Menu.Item>
        <Menu.Item>Wonderbra</Menu.Item>
      </SubMenu>
    </Menu>
  );
  const menu7 = (
    <Menu>
      <Menu.Item> NEW IN</Menu.Item>
      <Menu.Item> UPCOMING</Menu.Item>
      <SubMenu title="DEVICES">
        <Menu.Item>Mobiles</Menu.Item>
        <Menu.Item>Tablets</Menu.Item>
        <Menu.Item>Laptops</Menu.Item>
        <Menu.Item>Desktop</Menu.Item>
        <Menu.Item>Consoles</Menu.Item>
        <Menu.Item>Cameras</Menu.Item>
        <Menu.Item>Security System</Menu.Item>
      </SubMenu>
      <SubMenu title="ACCESSORIES">
        <Menu.Item>Mobile Accessories</Menu.Item>
        <Menu.Item>Audio</Menu.Item>
        <Menu.Item>Wearable</Menu.Item>
        <Menu.Item>Console Accessories</Menu.Item>
        <Menu.Item>Camera Accessories</Menu.Item>
        <Menu.Item>Computer Accessories</Menu.Item>
        <Menu.Item>Storage</Menu.Item>
        <Menu.Item>Printers</Menu.Item>
        <Menu.Item>Computer Components</Menu.Item>
        <Menu.Item>Network Components</Menu.Item>
        <Menu.Item>Software</Menu.Item>
      </SubMenu>
      <SubMenu title="SHOP BY BRAND">
      <Menu.Item>Apple</Menu.Item>
        <Menu.Item>Asus</Menu.Item>
        <Menu.Item>Samsung</Menu.Item>
        <Menu.Item>HTC</Menu.Item>
        <Menu.Item>Sony</Menu.Item>
        <Menu.Item>Oppo</Menu.Item>
        <Menu.Item>Vivo</Menu.Item>
        <Menu.Item>OnePlus</Menu.Item>
        <Menu.Item>Microsoft</Menu.Item>
        <Menu.Item>Nikon</Menu.Item>
        <Menu.Item>Dahua</Menu.Item>
        <Menu.Item>Jovision</Menu.Item>
        <Menu.Item>Walton</Menu.Item>
        <Menu.Item>Vision</Menu.Item>
        <Menu.Item>Sharp</Menu.Item>
      </SubMenu>
    </Menu>
  )
    const menu8 = (
      <Menu>
        <Menu.Item> NEW IN HOMEWARE</Menu.Item>
        <Menu.Item> NEW IN FURNITURE</Menu.Item>
        <Menu.Item> LATEST TRENDS</Menu.Item>
        <SubMenu title="EXCLUSIVE">
          <Menu.Item>Shop All</Menu.Item>
          <Menu.Item>Eid Collections</Menu.Item>
          <Menu.Item>Puja Collections</Menu.Item>
          <Menu.Item>Christmas Collections</Menu.Item>
          <Menu.Item>Seasonal Collections</Menu.Item>
        </SubMenu>
        <SubMenu title="LIVING ROOM">
          <Menu.Item>All Sofas & Armchairs</Menu.Item>
          <Menu.Item>Ready-Made Sofas</Menu.Item>
          <Menu.Item>Accent Chairs & Sofas</Menu.Item>
          <Menu.Item>Living Room Furniture</Menu.Item>
          <Menu.Item>TV Units</Menu.Item>
          <Menu.Item>Shelving & Storage</Menu.Item>
          <Menu.Item>Coffee & Side Tables</Menu.Item>
        </SubMenu>
        <SubMenu title="BEDROOM">
        <Menu.Item>All Bedding</Menu.Item>
          <Menu.Item>Bedsets</Menu.Item>
          <Menu.Item>Bed Sheets & Valances</Menu.Item>
          <Menu.Item>Duvets & Pillows</Menu.Item>
          <Menu.Item>Bedroom Furniture</Menu.Item>
          <Menu.Item>Beds & Divans</Menu.Item>
          <Menu.Item>Chests & Wardrobes</Menu.Item>
          <Menu.Item>Mattresses</Menu.Item>
          <Menu.Item>Fitted Bedroom Furniture</Menu.Item>
        </SubMenu>
        <SubMenu title="CHILDRENS & NURSERY">
        <Menu.Item>Children's Bedding</Menu.Item>
          <Menu.Item>Furniture</Menu.Item>
          <Menu.Item>Children's Accessories</Menu.Item>
          <Menu.Item>Nursery</Menu.Item>
          <Menu.Item>Pushchairs & Prams</Menu.Item>
        </SubMenu>
        <SubMenu title="HOME OFFICE">
        <Menu.Item>Shop All</Menu.Item>
        </SubMenu>
        <SubMenu title="HOME FURNISHINGS">
        <Menu.Item>Curtains</Menu.Item>
          <Menu.Item>Blinds</Menu.Item>
          <Menu.Item>Made to Measure Curtains</Menu.Item>
          <Menu.Item>Curtain Poles</Menu.Item>
          <Menu.Item>Rugs & Runners</Menu.Item>
          <Menu.Item>Cushions & Throws</Menu.Item>
          <Menu.Item>Wallpaper & Paint</Menu.Item>
        </SubMenu>
        <SubMenu title="LIGHTING">
        <Menu.Item>All Lighting</Menu.Item>
          <Menu.Item>Ceiling Lights</Menu.Item>
          <Menu.Item>Floor Lamps</Menu.Item>
          <Menu.Item>Table lamps</Menu.Item>
          <Menu.Item>Desk Lamps</Menu.Item>
          <Menu.Item>Wall Lights</Menu.Item>
        </SubMenu>
        <SubMenu title="KITCHEN & DINING">
        <Menu.Item>Dining Chairs</Menu.Item>
          <Menu.Item>Dining Room Furniture</Menu.Item>
          <Menu.Item>Kitchen & Tableware</Menu.Item>
          <Menu.Item>Utility</Menu.Item>
          <Menu.Item>Electricals</Menu.Item>
          <Menu.Item>Large Appliances</Menu.Item>
        </SubMenu>
        <SubMenu title="HOME ACCESSORIES">
        <Menu.Item>All Accessories</Menu.Item>
          <Menu.Item>Candles & Diffusers</Menu.Item>
          <Menu.Item>Storage & Organisation</Menu.Item>
          <Menu.Item>Ornaments</Menu.Item>
          <Menu.Item>Pictures & Canvases</Menu.Item>
          <Menu.Item>Mirrors</Menu.Item>
          <Menu.Item>Artificial Flowers & Plants</Menu.Item>
          <Menu.Item>Fresh Flowers & Plants</Menu.Item>
        </SubMenu>
        <SubMenu title="BATHROOM">
        <Menu.Item>All Bathroom</Menu.Item>
          <Menu.Item>Towel & Bathmats</Menu.Item>
          <Menu.Item>Bathroom Furniture</Menu.Item>
        </SubMenu>
        <SubMenu title="SHOP BY BRAND">
        <Menu.Item>A-Z Brands</Menu.Item>
          <Menu.Item>New In</Menu.Item>
          <Menu.Item>Joseph Joseph</Menu.Item>
          <Menu.Item>Eve</Menu.Item>
          <Menu.Item>Mamas & Papas</Menu.Item>
          <Menu.Item>Orla Kiely</Menu.Item>
        </SubMenu>
      </Menu>
  );
  const menu9 = (
    <Menu>
      <Menu.Item> NEW IN</Menu.Item>
      <SubMenu title="SOFAS & ARMCHAIRS">
        <Menu.Item>All Sofas & Armchairs</Menu.Item>
        <Menu.Item>Customise Your Sofa</Menu.Item>
        <Menu.Item>Ready-Made Sofas</Menu.Item>
        <Menu.Item>Leather Sofas</Menu.Item>
        <Menu.Item>Corner Sofas</Menu.Item>
        <Menu.Item>Sofa Beds</Menu.Item>
        <Menu.Item>Accent Chairs & Sofas</Menu.Item>
      </SubMenu>
      <SubMenu title="LIVING ROOM FURNITURE">
        <Menu.Item>Shop All</Menu.Item>
        <Menu.Item>TV Units</Menu.Item>
        <Menu.Item>Coffee Tables</Menu.Item>
        <Menu.Item>Side Tables</Menu.Item>
        <Menu.Item>Nest of Tables</Menu.Item>
        <Menu.Item>Shelving & Storage</Menu.Item>
        <Menu.Item>Sideboards</Menu.Item>
        <Menu.Item>Fireplaces</Menu.Item>
      </SubMenu>
      <SubMenu title="DINING ROOM FURNITURE">
      <Menu.Item>Shop All</Menu.Item>
        <Menu.Item>Dining Tables</Menu.Item>
        <Menu.Item>Dining Chairs</Menu.Item>
        <Menu.Item>Bench Sets</Menu.Item>
        <Menu.Item>Bar Stools</Menu.Item>
        <Menu.Item>Sideboards</Menu.Item>
      </SubMenu>
      <SubMenu title="BEDROOM FURNITURE">
      <Menu.Item>Shop All</Menu.Item>
        <Menu.Item>Beds & Divans</Menu.Item>
        <Menu.Item>Mattresses</Menu.Item>
        <Menu.Item>Wardrobes</Menu.Item>
        <Menu.Item>Bedside Tables</Menu.Item>
        <Menu.Item>Chest of Drawers</Menu.Item>
        <Menu.Item>Dressing Tables</Menu.Item>
        <Menu.Item>Headboards</Menu.Item>
        <Menu.Item>Fitted Bedroom Furniture</Menu.Item>
      </SubMenu>
      <SubMenu title="HOME OFFICE">
      <Menu.Item>Shop All</Menu.Item>
      <Menu.Item>Desks</Menu.Item>
      </SubMenu>
      <SubMenu title="CHILDRENS & NURSERY">
      <Menu.Item>Children's Furniture</Menu.Item>
        <Menu.Item>Nursery Furniture</Menu.Item>
        <Menu.Item>Pushchairs & Prams</Menu.Item>
      </SubMenu>
      <SubMenu title="GARDEN FURNITURE">
      <Menu.Item>Shop All</Menu.Item>
        <Menu.Item>Chairs & Lounges</Menu.Item>
        <Menu.Item>Dining Sets</Menu.Item>
      </SubMenu>
      <SubMenu title="SHOP BY RANGE">
      <Menu.Item>Bronx</Menu.Item>
        <Menu.Item>Malvern</Menu.Item>
        <Menu.Item>Sloane</Menu.Item>
        <Menu.Item>Jefferson</Menu.Item>
        <Menu.Item>Flynn</Menu.Item>
        <Menu.Item>Hampton</Menu.Item>
        <Menu.Item>Amsterdam</Menu.Item>
        <Menu.Item>Lloyd</Menu.Item>
        <Menu.Item>Fleur</Menu.Item>
        <Menu.Item>Ashington</Menu.Item>
        <Menu.Item>Ohara</Menu.Item>
        <Menu.Item>Murphy</Menu.Item>
        <Menu.Item>Mode</Menu.Item>
        <Menu.Item>Florence</Menu.Item>
        <Menu.Item>Anderson</Menu.Item>
        <Menu.Item>Alma</Menu.Item>
      </SubMenu>
      <SubMenu title="SHOP BY BRAND">
      <Menu.Item>A-Z Brands</Menu.Item>
        <Menu.Item>New In</Menu.Item>
        <Menu.Item>Aspire Furniture</Menu.Item>
        <Menu.Item>Cosatto</Menu.Item>
        <Menu.Item>East Coast</Menu.Item>
        <Menu.Item>Eve</Menu.Item>
        <Menu.Item>Frank Olsen</Menu.Item>
        <Menu.Item>Julian Bowen</Menu.Item>
        <Menu.Item>Mamas & Papas</Menu.Item>
        <Menu.Item>Orla Kiely</Menu.Item>
        <Menu.Item>Silentnight</Menu.Item>
        <Menu.Item>Wiemann</Menu.Item>
      </SubMenu>
    </Menu>
);
const menu10 = (
  <Menu>
    <Menu.Item> NEW IN</Menu.Item>
    <SubMenu title="MAKE-UP">
      <Menu.Item>Shop All</Menu.Item>
      <Menu.Item>Face</Menu.Item>
      <Menu.Item>Eyes</Menu.Item>
      <Menu.Item>Lips</Menu.Item>
      <Menu.Item>Nails</Menu.Item>
    </SubMenu>
    <SubMenu title="FRAGRANCE">
      <Menu.Item>Shop All</Menu.Item>
      <Menu.Item>For Her</Menu.Item>
      <Menu.Item>For Him</Menu.Item>
      <Menu.Item>Home</Menu.Item>
    </SubMenu>
    <SubMenu title="SKINCARE">
    <Menu.Item>Shop All</Menu.Item>
      <Menu.Item>For Her</Menu.Item>
      <Menu.Item>For Him</Menu.Item>
      <Menu.Item>Home</Menu.Item>
    </SubMenu>
    <SubMenu title="SKINCARE">
    <Menu.Item>Shop All</Menu.Item>
      <Menu.Item>Moisturisers</Menu.Item>
      <Menu.Item>Cleanser & Toners</Menu.Item>
      <Menu.Item>Serums & Oils</Menu.Item>
      <Menu.Item>Hand Sanitisers</Menu.Item>
    </SubMenu>
    <SubMenu title="MEN'S GROOMING">
    <Menu.Item>Shop All</Menu.Item>
    </SubMenu>
    <SubMenu title="HAIR CARE">
    <Menu.Item>Shop All</Menu.Item>
    </SubMenu>
    <SubMenu title="BATH & BODY">
    <Menu.Item>Shop All</Menu.Item>
      <Menu.Item>Suncare & Tanning</Menu.Item>
    </SubMenu>
    <SubMenu title="BEAUTY TOOLS">
    <Menu.Item>Shop All</Menu.Item>
      <Menu.Item>Cosmetic Bags</Menu.Item>
    </SubMenu>
    <SubMenu title="GIFTING">
    <Menu.Item>Shop All</Menu.Item>
      <Menu.Item>Gifts For Her</Menu.Item>
      <Menu.Item>Gifts For Him</Menu.Item>
    </SubMenu>
    <SubMenu title="ELECTRICALS">
    <Menu.Item>Shop All</Menu.Item>
      <Menu.Item>Hair Straighteners</Menu.Item>
      <Menu.Item>Hair Curlers</Menu.Item>
      <Menu.Item>Hair Dryers</Menu.Item>
      <Menu.Item>Electric Shavers</Menu.Item>
      <Menu.Item>Electric Toothbrushes</Menu.Item>
    </SubMenu>
    <SubMenu title="SHOP BY BRAND">
    <Menu.Item>A-Z Brands</Menu.Item>
      <Menu.Item>Benefit</Menu.Item>
      <Menu.Item>Bobbi Brown</Menu.Item>
      <Menu.Item>Clinique</Menu.Item>
      <Menu.Item>Elemis</Menu.Item>
      <Menu.Item>Estee Lauder</Menu.Item>
      <Menu.Item>Armani Beauty</Menu.Item>
      <Menu.Item>GHD</Menu.Item>
      <Menu.Item>Kiehl's</Menu.Item>
      <Menu.Item>Lancome</Menu.Item>
      <Menu.Item>Paco Rabanne</Menu.Item>
      <Menu.Item>The Ordinary</Menu.Item>
      <Menu.Item>Tom Ford</Menu.Item>
      <Menu.Item>Too Faced</Menu.Item>
      <Menu.Item>Urban Decay</Menu.Item>
      <Menu.Item>YSL</Menu.Item>
    </SubMenu>
  </Menu>
);
const menu11 = (
  <Menu>
    <SubMenu title="A-Z Brands">
      <Menu.Item>All</Menu.Item>
      <Menu.Item>Shop Now</Menu.Item>
      <Menu.Item>A-Z Designers</Menu.Item>
      <Menu.Item>Balenciaga Kids</Menu.Item>
      <Menu.Item>Dolce & Gabbana Kids</Menu.Item>
      <Menu.Item>Emporio Armani</Menu.Item>
      <Menu.Item>Kenzo Kids</Menu.Item>
      <Menu.Item>Moschino Kids</Menu.Item>
      <Menu.Item>Versace</Menu.Item>
    </SubMenu>
    <SubMenu title="POPULAR BRANDS">
      <Menu.Item>Abercrombie & Fitch</Menu.Item>
      <Menu.Item>Accessorize</Menu.Item>
      <Menu.Item>Adidas</Menu.Item>
      <Menu.Item>Animal</Menu.Item>
      <Menu.Item>Armani</Menu.Item>
      <Menu.Item>Barbour</Menu.Item>
      <Menu.Item>Birkenstock</Menu.Item>
      <Menu.Item>Boden</Menu.Item>
      <Menu.Item>Calvin Klein</Menu.Item>
      <Menu.Item>Catherine Lansfield</Menu.Item>
      <Menu.Item>Clarks</Menu.Item>
      <Menu.Item>Converse</Menu.Item>
      <Menu.Item>Dorothy Perkins</Menu.Item>
      <Menu.Item>Elemis</Menu.Item>
      <Menu.Item>Estee Lauder</Menu.Item>
      <Menu.Item>F&F</Menu.Item>
      <Menu.Item>FatFace</Menu.Item>
      <Menu.Item>Figleaves</Menu.Item>
      <Menu.Item>Gant</Menu.Item>
      <Menu.Item>GHD</Menu.Item>
      <Menu.Item>Havaianas</Menu.Item>
      <Menu.Item>Hollister</Menu.Item>
      <Menu.Item>Hugo Boss</Menu.Item>
      <Menu.Item>Hype</Menu.Item>
      <Menu.Item>Joules</Menu.Item>
      <Menu.Item>Julian Bowen</Menu.Item>
      <Menu.Item>Label Mix</Menu.Item>
      <Menu.Item>Lacoste</Menu.Item>
      <Menu.Item>Levi's</Menu.Item>
      <Menu.Item>Lipsy</Menu.Item>
      <Menu.Item>Lyle & Scott</Menu.Item>
      <Menu.Item>Mint Velvet</Menu.Item>
      <Menu.Item>Monsoon</Menu.Item>
      <Menu.Item>New Look</Menu.Item>
      <Menu.Item>Nike</Menu.Item>
      <Menu.Item>Phase Eight</Menu.Item>
      <Menu.Item>Pour Moi</Menu.Item>
      <Menu.Item>Quiz</Menu.Item>
      <Menu.Item>Ralph Lauren</Menu.Item>
      <Menu.Item>Regatta</Menu.Item>
      <Menu.Item>REISS</Menu.Item>
      <Menu.Item>River Island</Menu.Item>
      <Menu.Item>Skechers</Menu.Item>
      <Menu.Item>Silentnight</Menu.Item>
      <Menu.Item>Superdry</Menu.Item>
      <Menu.Item>Ted Baker</Menu.Item>
      <Menu.Item>The North Face</Menu.Item>
      <Menu.Item>Tommy Hilfiger</Menu.Item>
      <Menu.Item>Topshop</Menu.Item>
      <Menu.Item>UGG</Menu.Item>
      <Menu.Item>Under Armour</Menu.Item>
      <Menu.Item>Vans</Menu.Item>
      <Menu.Item>Wallis</Menu.Item>
      <Menu.Item>White Stuff</Menu.Item>
      <Menu.Item>Yours Clothing</Menu.Item>
    </SubMenu>
  </Menu>
);
const menu12 = (
  <Menu>
    <SubMenu title="WOMENS FOOTWEAR">
      <Menu.Item>Shop All</Menu.Item>
      <Menu.Item>New In</Menu.Item>
      <Menu.Item>Canvas & Plimsolls</Menu.Item>
      <Menu.Item>Gym & Training</Menu.Item>
      <Menu.Item>Running</Menu.Item>
      <Menu.Item>Sliders & Flip Flops</Menu.Item>
      <Menu.Item>Trainers</Menu.Item>
    </SubMenu>
    <SubMenu title="WOMENS SPORTSWEAR">
      <Menu.Item>Shop All</Menu.Item>
      <Menu.Item>New In</Menu.Item>
      <Menu.Item>Hoodies & Sweatshirts</Menu.Item>
      <Menu.Item>Jackets & Gilets</Menu.Item>
      <Menu.Item>Sports Bras</Menu.Item>
      <Menu.Item>Swimwear</Menu.Item>
      <Menu.Item>Tops & T-Shirts</Menu.Item>
      <Menu.Item>Tracksuits</Menu.Item>
      <Menu.Item>Trousers, Leggings & Shorts</Menu.Item>
      <Menu.Item>Accessories</Menu.Item>
    </SubMenu>
    <SubMenu title="MENS FOOTWEAR">
    <Menu.Item>Shop All</Menu.Item>
      <Menu.Item>New In</Menu.Item>
      <Menu.Item>Canvas & Vulc</Menu.Item>
      <Menu.Item>Gym & Training</Menu.Item>
      <Menu.Item>Running</Menu.Item>
      <Menu.Item>Sliders & Flip Flops</Menu.Item>
      <Menu.Item>Trainers</Menu.Item>
    </SubMenu>
    <SubMenu title="MENS SPORTSWEAR">
    <Menu.Item>Shop All</Menu.Item>
      <Menu.Item>New In</Menu.Item>
      <Menu.Item>Hoodies & Sweatshirts</Menu.Item>
      <Menu.Item>Jackets & Gilets</Menu.Item>
      <Menu.Item>Shorts</Menu.Item>
      <Menu.Item>Swimwear</Menu.Item>
      <Menu.Item>Tops & T-Shirts</Menu.Item>
      <Menu.Item>Tracksuits</Menu.Item>
      <Menu.Item>Trousers & Tights</Menu.Item>
      <Menu.Item>Accessories</Menu.Item>
    </SubMenu>
    <SubMenu title="KIDS FOOTWEAR">
    <Menu.Item>Shop All</Menu.Item>
    <Menu.Item>New In</Menu.Item>
    <Menu.Item>All Boys Footwear</Menu.Item>
    <Menu.Item>All Girls Footwear</Menu.Item>
    </SubMenu>
    <SubMenu title="BOYS SPORTSWEAR">
    <Menu.Item>Shop All</Menu.Item>
    <Menu.Item>New In</Menu.Item>
    </SubMenu>
    <SubMenu title="GIRLS SPORTSWEAR">
    <Menu.Item>Shop All</Menu.Item>
    <Menu.Item>New In</Menu.Item>
    </SubMenu>
    <SubMenu title="KIDS ACCESSORIES">
    <Menu.Item>All Kids Accessories</Menu.Item>
    <Menu.Item>Bags & Backpacks</Menu.Item>
    </SubMenu>
    <SubMenu title="SHOP BY SPORT">
    <Menu.Item>Dance</Menu.Item>
      <Menu.Item>Football</Menu.Item>
      <Menu.Item>Golf</Menu.Item>
      <Menu.Item>Gym & Training</Menu.Item>
      <Menu.Item>Hiking & Outdoor</Menu.Item>
      <Menu.Item>Rugby</Menu.Item>
      <Menu.Item>Running</Menu.Item>
      <Menu.Item>Ski</Menu.Item>
      <Menu.Item>Swimming</Menu.Item>
      <Menu.Item>Yoga</Menu.Item>
    </SubMenu>
    <SubMenu title="SHOP BY BRAND">
    <Menu.Item>A-Z Brands</Menu.Item>
      <Menu.Item>Nike</Menu.Item>
      <Menu.Item>Adidas</Menu.Item>
      <Menu.Item>Under Armour</Menu.Item>
      <Menu.Item>Converse</Menu.Item>
    </SubMenu>
  </Menu>
);
const menu13 = (
  <Menu>
    <Menu.Item> THE FESTIVAL SHOP
    </Menu.Item>
    <SubMenu title="DECORATIONS">
      <Menu.Item>All Decorations</Menu.Item>
      <Menu.Item>Baubles & Tree Decorations</Menu.Item>
      <Menu.Item>Candles & Lanterns</Menu.Item>
      <Menu.Item>Christmas Lights</Menu.Item>
      <Menu.Item>Personalised Decorations</Menu.Item>
      <Menu.Item>Room Decorations</Menu.Item>
      <Menu.Item>Wreaths & Garlands</Menu.Item>
    </SubMenu>
    <SubMenu title="CARDS & WRAP">
    <Menu.Item>Christmas Cards & Wrap</Menu.Item>
    </SubMenu>
    <SubMenu title="CHRISTMAS AT HOME">
    <Menu.Item>Advent Calendars</Menu.Item>
      <Menu.Item>Christmas Bedding</Menu.Item>
      <Menu.Item>Christmas Cookshop</Menu.Item>
      <Menu.Item>Christmas Dining</Menu.Item>
      <Menu.Item>Festive Fragrance</Menu.Item>
      <Menu.Item>Novelty Home</Menu.Item>
    </SubMenu>
    <SubMenu title="FRAGRANCE & BEAUTY">
    <Menu.Item>Fragrance</Menu.Item>
    <Menu.Item>Skincare</Menu.Item>
    <Menu.Item>Make Up</Menu.Item>
    <Menu.Item>Gift Sets</Menu.Item>
    <Menu.Item>Electricals</Menu.Item>
    </SubMenu>
    <SubMenu title="GIFT IDEAS">
    <Menu.Item>Beauty Gifts</Menu.Item>
    <Menu.Item>Personalised Gifts</Menu.Item>
    <Menu.Item>Toys & Games</Menu.Item>
    <Menu.Item>Premium Gifts</Menu.Item>
    <Menu.Item>Food & Drink Gifts</Menu.Item>
    <Menu.Item>Electrical Gifts</Menu.Item>
    <Menu.Item>Baby's First Christmas</Menu.Item>
    <Menu.Item>Novelty Gifts</Menu.Item>
    <Menu.Item>Secret Santa</Menu.Item>
    <Menu.Item>Stocking Fillers</Menu.Item>
    <Menu.Item>Stationery Gifts</Menu.Item>
    <Menu.Item>Gift Experiences</Menu.Item>
    <Menu.Item>Gift Cards</Menu.Item>
    <Menu.Item>E-Gift Cards</Menu.Item>
    </SubMenu>
    <SubMenu title="GIFT BY RECIPIENT">
    <Menu.Item>Gifts For Her</Menu.Item>
    <Menu.Item>Gifts For Him</Menu.Item>
    <Menu.Item>Gifts For Children</Menu.Item>
    <Menu.Item>Gifts For Pets</Menu.Item>
    </SubMenu>
    <SubMenu title="WHAT TO WEAR">
    <Menu.Item>All Festive Clothing</Menu.Item>
    <Menu.Item>Christmas Jumpers</Menu.Item>
    <Menu.Item>Christmas Nightwear</Menu.Item>
      <Menu.Item>Matching Family Christmas</Menu.Item>
      <Menu.Item>Womens Partywear</Menu.Item>
      <Menu.Item>Mens Partywear</Menu.Item>
      <Menu.Item>Girls Partywear</Menu.Item>
      <Menu.Item>Boys Partywear</Menu.Item>
    </SubMenu>
    <SubMenu title="BRANDS">
    <Menu.Item>A-Z Brands</Menu.Item>
      <Menu.Item>Adidas</Menu.Item>
      <Menu.Item>Barbour</Menu.Item>
      <Menu.Item>Calvin Klein</Menu.Item>
      <Menu.Item>Clinique</Menu.Item>
      <Menu.Item>Estee Lauder</Menu.Item>
      <Menu.Item>GHD</Menu.Item>
      <Menu.Item>Hugo Boss</Menu.Item>
      <Menu.Item>Lego</Menu.Item>
      <Menu.Item>Lipsy</Menu.Item>
      <Menu.Item>Nike</Menu.Item>
      <Menu.Item>The North Face</Menu.Item>
      <Menu.Item>Ugg</Menu.Item>
    </SubMenu>
    <SubMenu title="SHOP BY BRAND">
    <Menu.Item>A-Z Brands</Menu.Item>
      <Menu.Item>Nike</Menu.Item>
      <Menu.Item>Adidas</Menu.Item>
      <Menu.Item>Under Armour</Menu.Item>
      <Menu.Item>Converse</Menu.Item>
    </SubMenu>
  </Menu>
);
const menu14 = (
  <Menu>
    <SubMenu title="GIFTS BY OCCASION">
      <Menu.Item>Christening</Menu.Item>
      <Menu.Item>Engagement</Menu.Item>
      <Menu.Item>New Baby</Menu.Item>
      <Menu.Item>New Home</Menu.Item>
      <Menu.Item>Thank You</Menu.Item>
      <Menu.Item>Wedding</Menu.Item>
      <Menu.Item>Christmas</Menu.Item>
    </SubMenu>
    <SubMenu title="PERSONALISED GIFTS">
    <Menu.Item>Shop all Personalised Gifts</Menu.Item>
    <Menu.Item>Jewellery</Menu.Item>
    <Menu.Item>Pictures & Wall Art</Menu.Item>
    <Menu.Item>Cushions</Menu.Item>
    </SubMenu>
    <SubMenu title="GIFT BY RECIPIENT">
    <Menu.Item>Gifts For Her</Menu.Item>
    <Menu.Item>Gifts For Him</Menu.Item>
    <Menu.Item>Gifts For Children</Menu.Item>
    <Menu.Item>Gifts For Pets</Menu.Item>
    </SubMenu>
    <SubMenu title="TREAT YOURSELF">
    <Menu.Item>Women's Fashion</Menu.Item>
      <Menu.Item>Men's Fashion</Menu.Item>
      <Menu.Item>Beauty & Fragrance</Menu.Item>
      <Menu.Item>Men's Grooming</Menu.Item>
      <Menu.Item>Bags & Purses</Menu.Item>
      <Menu.Item>Jewellery</Menu.Item>
      <Menu.Item>Sunglasses</Menu.Item>
      <Menu.Item>Candles & Diffusers</Menu.Item>
      <Menu.Item>Food & Drink</Menu.Item>
    </SubMenu>
    <SubMenu title="STATIONERY & BOOKS">
    <Menu.Item>Cards & Wrap</Menu.Item>
    <Menu.Item>Books</Menu.Item>
    <Menu.Item>Stationery</Menu.Item>
    <Menu.Item>Notebook</Menu.Item>
    </SubMenu>
    <SubMenu title="GIFT CARDS">
    <Menu.Item>E-Gift Cards</Menu.Item>
    <Menu.Item>Gift Cards</Menu.Item>
    </SubMenu>
    <SubMenu title="GIFTS BY PRICE">
    <Menu.Item>Gifts £20 & Under</Menu.Item>
    <Menu.Item>Gifts £30 & Under</Menu.Item>
    <Menu.Item>Gifts £30 & Over</Menu.Item>
    </SubMenu>
    <SubMenu title="GIFTS BY TYPE">
    <Menu.Item>Flowers & Plants</Menu.Item>
      <Menu.Item>Beauty & Grooming</Menu.Item>
      <Menu.Item>Beer, Wine & Spirits</Menu.Item>
      <Menu.Item>Electrical Gifts</Menu.Item>
      <Menu.Item>Food & Drink</Menu.Item>
      <Menu.Item>Gift Experiences</Menu.Item>
      <Menu.Item>Jewellery</Menu.Item>
      <Menu.Item>Photo Gifts</Menu.Item>
      <Menu.Item>Premium Gifting</Menu.Item>
      <Menu.Item>Sports Gifts</Menu.Item>
      <Menu.Item>Stationery & Books</Menu.Item>
      <Menu.Item>Toys</Menu.Item>
      <Menu.Item>Watches</Menu.Item>
      <Menu.Item>Secret Santa</Menu.Item>
      <Menu.Item>Stocking Fillers</Menu.Item>
    </SubMenu>
    <SubMenu title="SHOP BY BRAND">
    <Menu.Item>Accessorize</Menu.Item>
      <Menu.Item>Beaverbrooks</Menu.Item>
      <Menu.Item>GHD</Menu.Item>
      <Menu.Item>Hugo Boss</Menu.Item>
      <Menu.Item>Lego</Menu.Item>
      <Menu.Item>Lol Suprise</Menu.Item>
      <Menu.Item>Mint Velvet</Menu.Item>
      <Menu.Item>Oliver Bonas</Menu.Item>
      <Menu.Item>Paca Rabanne</Menu.Item>
      <Menu.Item>Paperchase</Menu.Item>
      <Menu.Item>Smiggle</Menu.Item>
      <Menu.Item>V-Tech</Menu.Item>
      <Menu.Item>Virgin Experience Days</Menu.Item>
    </SubMenu>
    
  </Menu>
);
const menu15 = (
  <Menu>
    <SubMenu title="WOMEN">
      <Menu.Item>Shop All</Menu.Item>
      <Menu.Item>Dresses</Menu.Item>
      <Menu.Item>Saree</Menu.Item>
      <Menu.Item>Kameez</Menu.Item>
      <Menu.Item>Shoes</Menu.Item>
      <Menu.Item>Blouses & Shirts</Menu.Item>
      <Menu.Item>Swimwear</Menu.Item>
      <Menu.Item>Jumpers</Menu.Item>
      <Menu.Item>Tops</Menu.Item>
      <Menu.Item>Accessories</Menu.Item>
    </SubMenu>
    <SubMenu title="MEN">
    <Menu.Item>Shop All</Menu.Item>
    <Menu.Item>Shirts</Menu.Item>
    <Menu.Item>Panjabi</Menu.Item>
    <Menu.Item>Fatua</Menu.Item>
    <Menu.Item>Trousers</Menu.Item>
    <Menu.Item>Tailoring</Menu.Item>
    <Menu.Item>Jackets & Coats</Menu.Item>
    </SubMenu>
    <SubMenu title="GIRLS">
    <Menu.Item>All Girls</Menu.Item>
    <Menu.Item>Younger Girls</Menu.Item>
    <Menu.Item>Older Girls</Menu.Item>
    </SubMenu>
    <SubMenu title="BOYS">
    <Menu.Item>All Boys</Menu.Item>
      <Menu.Item>Younger Boys</Menu.Item>
      <Menu.Item>Older Boys</Menu.Item>
    </SubMenu>
    <SubMenu title="HOME">
    <Menu.Item>Shop All</Menu.Item>
    </SubMenu>
    <SubMenu title="DESIGNER BRANDS">
    <Menu.Item>Shop All</Menu.Item>
    <Menu.Item>Womens Brands</Menu.Item>
    <Menu.Item>Mens Brands</Menu.Item>
    </SubMenu>
    <SubMenu title="LIPSY">
    <Menu.Item>Shop All</Menu.Item>
    <Menu.Item>Dresses</Menu.Item>
    </SubMenu>
    <SubMenu title="SHOP CLEARANCE">
    <Menu.Item>Shop All</Menu.Item>
      <Menu.Item>Further Reductions</Menu.Item>
    </SubMenu>
  </Menu>
);
  return (
    <div className="header">
      
      <div className="header-contents">
      <Link to="/">
        <img
          className="logo_holder"
          src="https://i.ibb.co/Vgrw8Df/Logo-I.png"
        ></img>
        </Link>    
        
        
        <div className="header_search_menu">
        <Link to="/">
        <img
          className="logo_holder_mob"
          src="https://i.ibb.co/Qr38nkv/web-page-home.png"
        ></img>
        </Link>
          <div className="header__search">
            <Search
              className="search_input"
              placeholder="Search products here..."
              size="large"
              onSearch={(value) => console.log(value)}
              enterButton
            />
          </div>
          <Link to="/checkout">
          <span className="cart_mobile">
            <img
              className="icons_mobile"
              src="https://www.flaticon.com/svg/static/icons/svg/879/879815.svg"
            ></img>
            <span className="basket_amount">
                {basket.length}
              </span>
          </span>
          </Link>
          <Dropdown className="mob_menu_text" overlay={menu0}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <MoreVertIcon style={{width:'2em'}}  onClick={handleClick}></MoreVertIcon>
            </a>
          </Dropdown>
        </div>

        <div className="right_side">
        <Link to="/login">
          <div className="My_account">
            <img
              className="icons"
              src="https://www.flaticon.com/svg/static/icons/svg/1738/1738691.svg"
            ></img>
            <span className="account">My Account</span>
          </div>
          </Link>
          <span className="Help">Help</span>
          <span className="Store_location">Store Locations</span>
          <span className="Contact">Contact Us</span>
          <Link to="/checkout">
          <span className="cart">
            <img
              className="icons"
              src="https://www.flaticon.com/svg/static/icons/svg/879/879815.svg"
            ></img>
            <span className="basket_amount">
                {basket.length}
              </span>
          </span>
          </Link>
        </div>
        
      </div>
      <div className="menu_products">
        
        <Dropdown overlay={menu1} >
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          
            WOMEN
          
          </a>
        </Dropdown>
        
        <Dropdown  overlay={menu2} >
        
        
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()  } 
          >
           
            MEN     
              
          </a>  
       
        </Dropdown>
        
        <Dropdown overlay={menu3}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          BOYS
          </a>
        </Dropdown>
        <Dropdown overlay={menu4}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          GIRLS
          </a>
        </Dropdown>
        <Dropdown overlay={menu5}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          BABY
          </a>
        </Dropdown>
        <Dropdown overlay={menu6}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          LINGERIE
          </a>
        </Dropdown>
        <Dropdown overlay={menu7}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          ELECTRONICS
          </a>
        </Dropdown>
       
        
        <Dropdown overlay={menu8}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          HOME
          </a>
        </Dropdown>
       
       
        <Dropdown overlay={menu9}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          FURNITURE
          </a>
        </Dropdown>
        <Dropdown overlay={menu10}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          BEAUTY
          </a>
        </Dropdown>
        <Dropdown overlay={menu11}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          BRANDS
          </a>
        </Dropdown>
        <Dropdown overlay={menu12}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          SPORTS
          </a>
        </Dropdown>
        <Dropdown overlay={menu13}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          FESTIVAL
          </a>
        </Dropdown>
        <Dropdown overlay={menu14}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          GIFT
          </a>
        </Dropdown>
        <Dropdown overlay={menu15}>
          <a className="ant-dropdown-link_red" onClick={(e) => e.preventDefault()}>
          CLEARANCE
          </a>
        </Dropdown>
        </div>
      </div>
    
  );
}

export default Header;
