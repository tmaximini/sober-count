import React from "react";

import { withApollo } from "../lib/apollo";

import Typed from "react-typed";

import Layout from "../components/layoutComp";

import FullScreenContainer from "../components/FullScreenContainer";

import Nav from "../components/nav";
import Observations from "../components/svg/Observations";
import Spooky from "../components/svg/Spooky";
import People from "../components/svg/People";
import UserOverview from "../components/UserOverview";
import CallToAction from "../components/CallToAction";

const strings = [
  "High",
  "Alcohol",
  "Hangover",
  "Nicotine",
  "Porn",
  "Netflix",
  "Weed",
  "Fortnite"
];

const Home = () => {
  return (
    <Layout unstyled>
      <FullScreenContainer withBackground>
        <Nav light />
        <div className="h-full w-full flex justify-center content-center">
          <div className="align-middle self-center inline-block text-center">
            <h1 className="headline-landing my-4 text-white font-bold">
              Sober
              <br />
              is the new
              <br />
              <Typed
                strings={strings}
                typeSpeed={40}
                backSpeed={50}
                backDelay={2500}
                loop
              />
            </h1>
          </div>
        </div>
      </FullScreenContainer>
      <FullScreenContainer>
        <figure className="h-full w-full flex justify-center content-center">
          <div className="align-middle self-center inline-block text-center p-8">
            <h2 className="headline-landing my-4 text-gray-800 font-bold">
              Addictions
            </h2>
            <Spooky />
            <p className="text-xl">
              Millions of people suffer from all kinds of addictions. No matter
              how mild or severe, chances are that your life quality will
              improve significantly when you stop these toxic habits.
            </p>
            <p className="text-xl">
              <i>It's probably time to stop.</i>
            </p>
          </div>
        </figure>
      </FullScreenContainer>
      <FullScreenContainer grey>
        <figure className="h-full w-full flex justify-center content-center">
          <div className="align-middle self-center inline-block text-center p-8">
            <h2 className="headline-landing my-4 text-gray-800 font-bold">
              Stay sober
            </h2>
            <Observations />
            <p className="text-xl">
              Staying sober is not easy. It requires a change of habits. These
              habits might have been ingrained in our brains for a long time. We
              also have to question our surroundings and become more aware of
              potential triggers.
            </p>
            <p className="text-xl">
              <i>Stay focused and take it one day at a time.</i>
            </p>
          </div>
        </figure>
      </FullScreenContainer>
      <FullScreenContainer>
        <figure className="h-full w-full flex justify-center content-center">
          <div className="align-middle self-center inline-block text-center p-8">
            <h2 className="headline-landing my-4 text-gray-800 font-bold">
              Community
            </h2>
            <People />
            <p className="text-xl">
              Changing your lifestyle is difficult. There will be times where we
              feel bad and question our choices. During these times it is
              important to have support and reassurance.
            </p>
            <p className="text-xl">
              <i>You're not alone!</i>
            </p>
            <CallToAction url="/create" title="Join now" />
          </div>
        </figure>
      </FullScreenContainer>
      <FullScreenContainer grey>
        <figure className="h-full w-full flex justify-center content-center">
          <div className="align-middle self-center inline-block text-center p-8">
            <h2 className="headline-landing my-4 text-gray-800 font-bold">
              Peeps getting sober
            </h2>
            <UserOverview showDays />
          </div>
        </figure>
      </FullScreenContainer>
    </Layout>
  );
};

export default withApollo(Home);
