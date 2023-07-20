import { useState } from "react";
import "./App.css";
import Back from "./assets/back.png";
import Menu from "./assets/menu.png";
import BitcoinIcon from "./assets/bitcoin.png";
import Down from "./assets/arrow-down.png";
import Wallet from "./assets/wallet.png";
import Compass from "./assets/compass.png";
import Bell from "./assets/bell.png";
import Settings from "./assets/settings.png";
import BlueDollar from "./assets/blue-dollar.png";
import PinkDollar from "./assets/pink-dollar.png";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [openSale, setOpenSale] = useState(false);

  const data = [
    {
      name: "Lower",
      uv: 2.895,
    },
    {
      name: "current",
      uv: 3.957,
    },
    {
      name: "Higher",
      uv: 3.483,
    },
    {
      name: "Hier",
      uv: 3.583,
    },
    {
      name: "Higher",
      uv: 4.283,
    },
    {
      name: "Higher",
      uv: 4.583,
    },
    {
      name: "Hher",
      uv: 3.983,
    },
    {
      name: "Hir",
      uv: 4.283,
    },
  ];

  function openMenu() {
    setShowMenu(!showMenu);
  }

  function showButtons() {
    setOpenSale(!openSale);
  }

  return (
    <>
      <header>
        <div className="back__btn">
          <img src={Back} alt="back" />
        </div>
        <h1>Bitcoin Wallet</h1>
        <div className="menu__btn" onClick={() => openMenu()}>
          <img src={Menu} alt="menu" />
        </div>

        {showMenu ? (
          <div className="menu__container">
            <div className="dropdown">
              <ul>
                <li>Edit</li>
                <li>Courier info</li>
                <li>Share</li>
                <li>Remove</li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </header>

      <main>
        <div className="balance">
          <div className="currency">
            <div className="name">
              <div className="logo">
                <img src={BitcoinIcon} alt="" />
              </div>
              <div className="name__main">Bitcoin</div>
            </div>
            <div className="abbreviation">BTC</div>
          </div>
          <div className="main__balance">3.529020 BTC</div>
          <div className="conversion">
            <div className="dollar__amount">$19.153 USD</div>
            <div className="price__shift"> -2.32%</div>
          </div>
          <div className={openSale ? "sale__btns" : "sale__btns collapsed"}>
            <button>Buy</button>
            <button>Sell</button>
          </div>
          <div
            className={openSale ? "arrow flipped" : "arrow"}
            onClick={() => showButtons()}
          >
            <img src={Down} alt="" />
          </div>
        </div>
        <div className="graph__area">
          <div className="frequency">
            <div className="time">Day</div>
            <div className="time active">Week</div>
            <div className="time">Month</div>
            <div className="time">Year</div>
          </div>
          <div className="main__graph">
            <div className="rise-drop">
              <div className="lower">
                <div className="dot"></div>
                <p>Lower: $4.895</p>
              </div>
              <div className="higher">
                <div className="dot"></div>
                <p>Higher: $6.857</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: 200,
                position: "absolute",
                bottom: 0,
                left: 0,
              }}
            >
              <ResponsiveContainer>
                <AreaChart
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#feb225"
                    strokeWidth={4}
                    strokeLinejoin="#000000"
                    fill="#fabd4b6f"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="rate">
              <div className="icon">
                <div className="inner__icon"></div>
              </div>
              <div className="main__rate">1 BTC = $5.483</div>
            </div>
          </div>
        </div>
        <div className="buy-sell">
          <div className="btn buy">
            <div className="dollar__image">
              <img src={BlueDollar} alt="buy btc" />
            </div>
            <div className="btn__text">Buy BTC</div>
          </div>
          <div className="btn sell">
            <div className="dollar__image">
              <img src={PinkDollar} alt="sell btc" />
            </div>
            <div className="btn__text">Sell BTC</div>
          </div>
        </div>
      </main>

      <nav className="bottom__menu">
        <div className="wallet">
          <img src={Wallet} alt="wallet" />
        </div>
        <div className="navigator">
          <img src={Compass} alt="navigator" />
        </div>
        <div className="notifs">
          <img src={Bell} alt="notifications" />
        </div>
        <div className="settings">
          <img src={Settings} alt="settings" />
        </div>
      </nav>
    </>
  );
}

export default App;
