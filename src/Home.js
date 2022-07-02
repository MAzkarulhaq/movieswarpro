import React from "react";
import Web3 from "web3";
import abi from "./abi.json";
import "./Home.css";
import { useEffect, useState } from "react";
import moviewargif from "./assets/moviewar.gif";
import ban from "./assets/7.jpg";
import ban2 from "./assets/4.jpg";

import twitter from "./assets/twitter.svg";
import opensea from "./assets/opensea.svg";
import discord from "./assets/discord.svg";
import Slider from "./Slider";
import NewTimeline from "./NewTimeline";
require("dotenv").config();

const { REACT_APP_CONTRACT_ADDRESS } = process.env;
const Home = ({ connecctstatus, setConnectedstatus }) => {
  const [connectedAccount, setConnectedAccount] = useState("Connect Wallet");
  const [contract, setContract] = useState(null);
  const [tokenId, setTokenId] = useState(null);
  const [supply, setTokenSupply] = useState(null);
  const [price, setPrice] = useState();
  const [priceInEth, setPriceInEth] = useState(0.06);
  const [quantity, setQuantity] = useState(1);
  const [minted, setMinted] = useState(false);
  console.log("C", connecctstatus);

  useEffect(() => {
    loadWeb3();
  }, []);

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      // await window.ethereum.enable();
      const web3 = window.web3;
      // creating contract instance
      const contractaddress = REACT_APP_CONTRACT_ADDRESS;
      const ct = new web3.eth.Contract(abi, contractaddress);
      setContract(ct);
      console.log("ct", ct);
      let price = await ct.methods.price().call();
      setContract(ct);
      setPrice(price);
      setPriceInEth(web3.utils.fromWei(price, "ether"));
      const totalSupply = await ct.methods.totalSupply().call();
      setTokenSupply(totalSupply);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async function mint() {
    const web3 = window.web3;
    const _value = price * quantity;
    const address = await web3.eth.getAccounts();

    await contract.methods
      .mint(quantity)
      .send({ from: address.toString(), value: _value });
    setMinted(true);
    const totalSupply = await contract.methods.totalSupply().call();
    setTokenSupply(totalSupply);
  }
  async function connectWallet() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      const metaMaskAccount = await web3.eth.getAccounts();
      setConnectedstatus(true);
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
      <div className="container py-5">
        <div className="row text-center">
          <h1>Alright producers! Ready to make some movies?</h1>
          <p className="fs-3">
            Movie War is a simulation movie making NFT card game.
            <br />
            Get your Movie War Talent Cards and
            <br />
            get ready for the Movie War Game!
          </p>
          <h3>
            <button className="btn mt-4  px-5 py-3 btn-primary rounded-0 mt-5 text-uppercase shadow">
              Enter Game (Comming soon)
            </button>
          </h3>
        </div>
        <div className="row pt-5 justify-content-between">
          <div className="col-md-7">
            <p className="fs-4">
              We have 501 versions of cards with 262 different talents (2
              versions for some talents), total of 9557 supply for you to
              collect
              <br /> <br />
              Except the golden edition, all talents have two different versions
              of cards. “Normal” version and “Super” version. “Super” version
              has slightly higher attributes than the normal version, and each
              talent’s attributes are various based on the rarity of the cards.
              <br />
              <br />
              Each card is one of a kind and unique. BUT! There are still
              different rarities within the set, since the supply quantity of
              each card could be different.
              <br />
              <ul>
                <li>Card #51-#72 (supply:1) One and Only</li>
                <li>Card #1-#50 (supply:3) Ultra Rare </li>
                <li>Card #73-#150 (supply:5) Super Rare</li>
                <li>Card #151-#250 (supply:15) Rare</li>
                <li>Card #251 - #501 (supply : 30) Common</li>
              </ul>
            </p>
          </div>
          <div className="col-md-4">
            <img src={ban} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row py-5 justify-content-center mt-5">
          <div className="col-md-6">
            <h2 className="display-4">
              A FILM MAKING SIMULATION NFT CARD GAME
            </h2>
            <p className="fs-3">
              Movie War is a simulation movie making NFT card game. Get your
              Movie War Talent Cards and get ready for the Movie War Game!
            </p>
            <div
              class="row py-4 mintbox"
              //   style="background: rgb(81, 65, 84); border: 3px solid rgb(255, 255, 255);"
            >
              <div class="col-12">
                <div class="row">
                  <div class="col-lg-12 row justify-content-center align-items-center">
                    <div class="row">
                      <div class="col-12">
                        <div class="row ">
                          <div class="col-6">
                            <p class="text-center">Quantiy</p>
                            <div class="bg-white btngroup py-1 px-1 rounded-0">
                              <div
                                class="d-flex rounded-0 btngroup justify-content-between"
                                role="group"
                                aria-label="First group"
                              >
                                <button
                                  type="button"
                                  class="btn bg-dark text-white rounded-0"
                                  onClick={() => {
                                    if (quantity > 1) {
                                      setQuantity(quantity - 1);
                                    }
                                  }}
                                >
                                  -
                                </button>
                                <button type="button" class="btn">
                                  {quantity}
                                </button>
                                <button
                                  type="button"
                                  class="btn bg-dark text-white rounded-0"
                                  onClick={() => {
                                    if (quantity < 20) {
                                      setQuantity(quantity + 1);
                                    }
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="col-6">
                            <div>
                              <p class="text-center">Price</p>
                            </div>
                            <div class="mt-4 text-center">
                              <span>
                                <i class="fab fa-ethereum"></i>
                              </span>
                              <span class=""> {priceInEth} ETH</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 d-flex xm-center">
                        <button
                          type="button"
                          class="btn mt-4  px-5 py-2 btn-primary rounded-0 mt-5"
                          //   style="background-color: white; width: 100%; font-weight: bold;"
                          onClick={async () => {
                            await connectWallet();
                            mint();
                          }}
                        >
                          Mint Now
                        </button>
                      </div>
                      <p class="py-2 center-small">{supply}/9,999 MINTED</p>
                      {minted ? (
                        <p className="">
                          congratulation you minted {quantity} Movie War Card
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src={moviewargif} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row pt-5 justify-content-between">
          <div className="col-md-4">
            <img src={ban2} alt="" className="img-fluid" />
          </div>
          <div className="col-md-7">
            <h1 className="py-3">Play Movie War?</h1>
            <p className="fs-3">
              Each talent and version have their own unique attributes, ready to
              be participated in movies, compete in tournament and 1 vs 1
              matches.
              <br />
              As a producer, you get to decide who is going to be the main lead,
              supporting cast and more! Just get at least 3 talent cards and
              ready to play Movie War NFT card game.
            </p>
            <h3 className="text-end">
              <button
                type="button"
                class="btn mt-4  px-5 py-3 btn-primary rounded-0 mt-5 text-uppercase"
              >
                Enter Game (Comming soon)Game
              </button>
            </h3>
          </div>
        </div>
      </div>
      <br />
      <Slider />
      <div className="container text-center pt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <h1 className="center-small">Roadmap</h1>
            <p className="text-center px-lg fs-3">
              This roadmap outlines our goals and where we want to take
              MekaVerse. We have a lot of ideas and concepts that we are working
              on. It may evolve over time and hopefully become even better!
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <NewTimeline />
      <div className="container-fluid bgpreview">
        <div className="container py-5">
          <div className="row justify-content-center align-items-center py-5">
            <div className="col-md-6">
              <h1 className="center-small">JOIN OUR COMMUNITY</h1>
              <p className="fs-4 center-small">
                Get our updated news and interact with other players and
                creator. Together we can make our community stronger!
              </p>
              <p className=" center-small">
                <a
                  href="https://discord.gg/JrhxcBS3Hn"
                  target="_blank"
                  class="btn btn-primary rounded-0 btn-lg center-small"
                >
                  Join our Discord
                </a>
              </p>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container my-5 ">
          <div className="row justify-content-center my-5">
            <div className="col-md-6">
              <h1 className="center-small">MOVIEW WAR</h1>
              <p className="center-small">
                A FILM MAKING SIMULATION NFT CARD GAME
              </p>
              <p className="text-muted mt-5 center-small">
                ©2021 MOVIEW WAR. All rights reserved.
              </p>
            </div>
            <div className="col-md-4">
              <div>
                <p className="center-small">Home</p>
                <p className="text-muted mt-5 center-small">
                  Terms and Conditions
                  <br />
                  <br />
                  <a
                    className="text-muted text-center mt-5 center-small"
                    href=""
                  >
                    Smart Contract
                  </a>
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
