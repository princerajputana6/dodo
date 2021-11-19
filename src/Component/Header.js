import React from 'react'
import "./Style.css"
export default function Header() {
    return (
        <div>
            <nav class="navbar">
                <a href="/" class="navbar-logo"
                ><img src="https://news.syr.edu/wp-content/uploads/2017/12/bitcoin400x300.jpg" width="90px" height="50px" alt="" /></a>
                <ul class="navbar-links">
                    <li class="navbar-dropdown">
                        <a href="/" className="text-light">Exchange</a>
                    </li>
                    <li class="navbar-dropdown">
                        <a href="/">Earn</a>
                        <div class="dropdown">
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp; Option 1</a>
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp; Option 2</a>
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp; Option 3</a>
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp; Option 4</a>
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp; Option Eceeds</a>
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp; Option Overlaps</a>
                        </div>
                    </li>
                    <li class="navbar-dropdown">
                        <a href="/">Crowdpooling</a>
                    </li>
                    <li class="navbar-dropdown">
                        <a href="/">Tools</a>
                        <div class="dropdown">
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp;Exchange rate</a>
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp;virtual Effect</a>
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp;Data Binding</a>
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp;load Balancing Effect</a>
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp;Data sourcing</a>
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp;Matter Load</a>
                        </div>
                    </li>
                    <li class="navbar-dropdown">
                        <a href="/">Governance</a>
                        <div class="dropdown">
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp;Paneer Chill Dry</a>
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp;Paneer Garlic</a>
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp;Our Policies</a>
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp;Data Sourcing</a>
                        </div>
                    </li>
                    <li class="navbar-dropdown">
                        <a href="/">Bridge</a>
                        <div class="dropdown">
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp;Bridge Loop</a>
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp;Data looping</a>
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp;Connection refrence</a>
                            <a href="/"><img src="https://g.foolcdn.com/editorial/images/653073/bitcoin-cryptocurrency-digital-ethereum-dollar-gold-investment-getty.jpg" height="30px"width="30px" alt="" />&nbsp;Instances</a>
                        </div>
                    </li>
                </ul>
                <ul  class="navbar-links" style={{marginLeft:"-50px"}}>
                    <li class="navbar-dropdown">
                        <a href="/" className="connectbutton">
                            Wanna Connect
                        </a>
                    </li>
                  
                    <li class="navbar-dropdown" >
                        <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png" width="30px" height="30px" alt=""/></a>
                        <div class="dropdown">
                            <a href="/"> Bridge Loop</a>
                            <a href="/">Data looping</a>
                            <a href="/">Connection refrence</a>
                            <a href="/">Instances</a>
                        </div>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
