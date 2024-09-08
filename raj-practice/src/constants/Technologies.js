import react from "@/../public/assets/images/HomePage/Technologies/FrontEnd/react.svg";
import next from "@/../public/assets/images/HomePage/Technologies/FrontEnd/next.svg";
import vue from "@/../public/assets/images/HomePage/Technologies/FrontEnd/vue.svg";
import angular from "@/../public/assets/images/HomePage/Technologies/FrontEnd/angular.svg";
import Javascript from "@/../public/assets/images/HomePage/Technologies/FrontEnd/Javascript.svg";

import bubbleIo from "@/../public/assets/images/HomePage/Technologies/Low-Code-No-Code/Bubble.io.svg";
import flutterflowIo from "@/../public/assets/images/HomePage/Technologies/Low-Code-No-Code/FlutterFlow.svg";
import FramerIo from "@/../public/assets/images/HomePage/Technologies/Low-Code-No-Code/Framer_logo.svg";
import WebflowIo from "@/../public/assets/images/HomePage/Technologies/Low-Code-No-Code/Webflow_logo.svg";

import nodejs from "@/../public/assets/images/HomePage/Technologies/BackEnd/nodejs.svg";
import python from "@/../public/assets/images/HomePage/Technologies/BackEnd/python.svg";
import supabase from "@/../public/assets/images/HomePage/Technologies/BackEnd/supabase-icon.svg";

import android from "@/../public/assets/images/HomePage/Technologies/Mobile/android.svg";
import flutter from "@/../public/assets/images/HomePage/Technologies/Mobile/flutter.svg";
import flutterflow from "@/../public/assets/images/HomePage/Technologies/Mobile/flutterflow.svg";
import ios from "@/../public/assets/images/HomePage/Technologies/Mobile/ios.svg";

import firebase from "@/../public/assets/images/HomePage/Technologies/DataBase/firebase.svg";
import mongodb from "@/../public/assets/images/HomePage/Technologies/DataBase/mongodb.svg";
import MySQL from "@/../public/assets/images/HomePage/Technologies/DataBase/MySQL.svg";
import postgresql from "@/../public/assets/images/HomePage/Technologies/DataBase/postgresql.svg";
import SQLite from "@/../public/assets/images/HomePage/Technologies/DataBase/SQLite.svg";

import AWS from "@/../public/assets/images/HomePage/Technologies/CloudManagement/AWS.svg";
import Azure from "@/../public/assets/images/HomePage/Technologies/CloudManagement/Azure.svg";
import Docker from "@/../public/assets/images/HomePage/Technologies/CloudManagement/Docker.svg";
import Git from "@/../public/assets/images/HomePage/Technologies/CloudManagement/Git.svg";
import Kubernets from "@/../public/assets/images/HomePage/Technologies/CloudManagement/Kubernets.svg";
import GitHub from "@/../public/assets/images/HomePage/Technologies/CloudManagement/GitHub_logo.svg";

import DAO from "@/../public/assets/images/HomePage/Technologies/Blockchain/DAO.svg";
import NFT from "@/../public/assets/images/HomePage/Technologies/Blockchain/NFT.svg";
import Solidity from "@/../public/assets/images/HomePage/Technologies/Blockchain/Solidity.svg";
import web3 from "@/../public/assets/images/HomePage/Technologies/Blockchain/Web3 JS.svg";
import Defi from "@/../public/assets/images/HomePage/Technologies/Blockchain/Defi.svg";

export const Tabstitle = [
  { title: "Low Code No Code", value: "LowCodeNoCode" },
  { title: "Frontend", value: "Frontend" },
  { title: "Backend", value: "Backend" },
  { title: "Mobile", value: "Mobile" },
  { title: "Database", value: "Database" },
  { title: "Cloud Management", value: "CloudManagement" },
  { title: "Blockchain", value: "Blockchain" },
];

export const TabPanelValue = {
  LowCodeNoCode: [
    {
      image: bubbleIo,
      name: "Bubble.io",
    },
    {
      image: flutterflowIo,
      name: "FlutterFlow",
    },
    {
      image: FramerIo,
      name: "Framer",
    },
    {
      image: WebflowIo,
      name: "Webflow",
    },
  ],
  Frontend: [
    {
      image: react,
      name: "React.js",
    },
    {
      image: next,
      name: "Next.js",
    },
    {
      image: vue,
      name: "Vue.js",
    },
    {
      image: angular,
      name: "Angular.js",
    },
    {
      image: Javascript,
      name: "Javascript",
    },
  ],
  Backend: [
    {
      image: nodejs,
      name: "Node.js",
    },
    {
      image: python,
      name: "Python",
    },
    {
      image: firebase,
      name: "Firebase",
    },
    {
      image: supabase,
      name: "Supabase",
    },
  ],
  Mobile: [
    {
      image: android,
      name: "Android",
    },
    {
      image: flutter,
      name: "Flutter",
    },
    {
      image: flutterflow,
      name: "Flutter Flow",
    },
    {
      image: ios,
      name: "ios",
    },
  ],
  Database: [
    {
      image: postgresql,
      name: "PostgreSQL",
    },
    {
      image: mongodb,
      name: "MongoDB",
    },
    {
      image: firebase,
      name: "Firebase",
    },
    {
      image: MySQL,
      name: "MySQL",
    },
    {
      image: SQLite,
      name: "SQLite",
    }, 
    {
      image: supabase,
      name: "Supabase",
    },
  ],
  CloudManagement: [
    {
      image: AWS,
      name: "AWS",
    },
    {
      image: Azure,
      name: "Azure",
    },
    {
      image: Docker,
      name: "Docker",
    },
    {
      image: Git,
      name: "Git",
    },
    {
      image: Kubernets,
      name: "Kubernets",
    },
    {
      image: GitHub,
      name: "GitHub",
    },
  ],
  Blockchain: [
    {
      image: Solidity,
      name: "Solidity",
    },
    {
      image: NFT,
      name: "NFT",
    },
    {
      image: DAO,
      name: "DAO",
    },
    {
      image: web3,
      name: "Web3.js",
    },
    {
      image: Defi,
      name: "Defi",
    },
  ],
};

export const TabPanelButton = {
  Frontend: "Hire Frontend Developer",
  LowCodeNoCode: "Hire Low Code No Code Developer",
  Backend: "Hire Backend Developer",
  Mobile: "Hire Mobile Developer",
  Blockchain: "Hire Blockchain Developer", 
  Dedicated:"hire-dedicated-developers"
};

export const TabPanelButtonLinkquerys = {
  LowCodeNoCode: "LowCodeNoCode-developer",
  Dedicated: "Dedicated-developer",
  Frontend: "frontend-developer",
  Backend: "backend-developer",
  Mobile: "mobile-developer",
  Blockchain: "blockchain-developer",
};
