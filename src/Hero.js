import React from "react";
import Web3 from "web3";
import { useEffect, useState } from "react";
import abi from "./abi.json";
import "./Hero.css";
// import twitter from "./assets/twitter.svg";
import opensea from "./assets/opensea.svg";
// import discord from "./assets/discord.svg";

const Hero = ({ setconnecctstatus, connecctstatus }) => {
  const [connectedAccount, setConnectedAccount] = useState("Connect Wallet");
  useEffect(() => {
    if (connecctstatus) {
      connectWallet();
    }
  });

  async function connectWallet() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      const metaMaskAccount = await web3.eth.getAccounts();

      let splitedMetaMaskAddress;
      if (metaMaskAccount) {
        splitedMetaMaskAddress =
          metaMaskAccount[0].substring(0, 6) +
          "......" +
          metaMaskAccount[0].substring(
            metaMaskAccount[0].length - 4,
            metaMaskAccount[0].length
          );
      }
      setConnectedAccount(splitedMetaMaskAddress);
      console.log("CCC", connecctstatus);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  return (
    <>
      <div id="hero">
        <nav class="navbar navbar-expand navbar-light bg-transparent pt-5">
          <div class="container">
            <a
              class="nav-link active border px-3 ms-4 social"
              href="mailto:nftmoviewargame@gmail.com"
            >
              <i class="fas fa-envelope"></i>
            </a>
            <a
              class="nav-link active border px-3 ms-4 social nohide"
              href="https://www.twitter.com/NFTMovieWar"
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              class="nav-link border px-3 ms-4 social"
              href="https://opensea.io/assets/moviewar"
              target="_blank"
            >
              <img src={opensea} alt="" />
            </a>
            <a
              class="nav-link active border px-3 ms-4 social"
              href="https://www.instagram.com/NFTMovieWarGame/"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              class="nav-link border px-3 ms-4 social"
              href="https://discord.gg/JrhxcBS3Hn"
              target="_blank"
            >
              <i class="fab fa-discord"></i>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ms-auto">
                <a
                  class="nav-link btn-wallet rounded-0 cursor-pointer"
                  onClick={connectWallet}
                >
                  {connectedAccount}
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Hero;
