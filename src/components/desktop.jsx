import React from "react";
import {
  List,
  Frame,
  ProgressBar,
  TaskBar,
  TitleBar,
  Modal,
} from "@react95/core";
import Janne_pixelated from "../assets/janne_pixelated.png";
import Shortcuts from "./desktopIcons";
import * as S from "./layoutStyling";
import "./styles.scss";
import {
  Mspaint,
  User,
  CdMusic,
  Progman34,
  Textchat,
  Explorer103,
  Awfxcg321303,
} from "@react95/icons";
import Portfolio from "./portfolio";
import CV from "./cv";
import Tunes from "./tunes";
import useModal from "./useModal";

function Desktop() {
  const [showAboutModal, handleOpenAboutModal, handleCloseAboutModal] =
    useModal(true);
  const [showSkillsModal, handleOpenSkillsModal, handleCloseSkillsModal] =
    useModal(false);
  const [showPhotoModal, handleOpenPhotoModal, handleClosePhotoModal] =
    useModal(false);
  const [
    showVaporwaveModal,
    handleOpenVaporwaveModal,
    handleCloseVaporwaveModal,
  ] = useModal(false);
  const [
    showPortfolioModal,
    handleOpenPortfolioModal,
    handleClosePortfolioModal,
  ] = useModal(false);
  const [showCVModal, handleOpenCVModal, handleCloseCVModal] = useModal(false);
  const [showTunesModal, handleOpenTunesModal, handleCloseTunesModal] =
    useModal(false);

  const socialMedia = [
    {
      id: 1,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/janneilkka/",
    },
    {
      id: 2,
      name: "Github",
      url: "https://www.github.com/janneilkka/",
    },
    {
      id: 3,
      name: "Instagram",
      url: "https://instagram.com/janne.ilkka",
    },
    {
      id: 4,
      name: "Spotify",
      url: "https://open.spotify.com/user/rogergregor",
    },
  ];

  return (
    <>
      <TaskBar
        list={
          <List>
            <List.Item
              icon={<Progman34 variant="32x32_4" />}
              className="listLink"
            >
              Socials
              <List>
                {socialMedia.map(({ id, name, url }) => (
                  <List.Item
                    as="a"
                    href={url}
                    key={id}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="listLink"
                  >
                    {name}
                  </List.Item>
                ))}
              </List>
            </List.Item>
            <List.Item
              icon={<CdMusic variant="32x32_4" />}
              className="listLink"
            >
              Tunes
              <List>
                <List.Item
                  onClick={handleOpenVaporwaveModal}
                  icon={<CdMusic variant="16x16_4" />}
                  className="listLink"
                >
                  Janne's Vaporwave Story from 2018
                </List.Item>
                <List.Item
                  onClick={handleOpenTunesModal}
                  icon={<CdMusic variant="16x16_4" />}
                  className="listLink"
                >
                  Janne's Ultimate House Playlist on Spotify
                </List.Item>
              </List>
            </List.Item>
            <List.Item
              icon={<Awfxcg321303 variant="32x32_4" />}
              onClick={handleOpenCVModal}
              className="listLink"
            >
              CV{" "}
            </List.Item>
            <List.Item
              icon={<Explorer103 variant="32x32_4" />}
              onClick={handleOpenPortfolioModal}
              className="listLink"
            >
              Portfolio{" "}
            </List.Item>
            <List.Item
              icon={<User variant="32x32_4" />}
              onClick={handleOpenPhotoModal}
              className="listLink"
            >
              Janne
            </List.Item>
            <List.Item
              icon={<Mspaint variant="32x32_4" />}
              onClick={handleOpenSkillsModal}
              className="listLink"
            >
              Skills
            </List.Item>
            <List.Divider />
            <List.Item
              icon={<Textchat variant="32x32_4" />}
              onClick={handleOpenAboutModal}
              className="listLink"
            >
              Welcome
            </List.Item>
          </List>
        }
      />

      <Shortcuts
        openPortfolio={handleOpenPortfolioModal}
        openCV={handleOpenCVModal}
        openTunes={handleOpenTunesModal}
      />
      {showAboutModal && (
        <S.styledModal
          icon={<Textchat variant="16x16_4" />}
          title={"Welcome.txt"}
          titleBarOptions={<TitleBar.Close onClick={handleCloseAboutModal} />}
        >
          <S.styledModalFrame bg="white" boxShadow="$in">
            <h1>Hello!</h1>
            <p>
              I'm Janne, a designer of many talents from Helsinki. I've been
              working lately with product development in many roles and domains:
              from ecommerce, to public sector, to startups. I'm into structured
              and systems oriented software development, where design is agile
              and rapid.
              <br />
              This app, sort of a playground of ideas, has been built with Vite
              and{" "}
              <a
                href="https://github.com/React95/React95"
                target="_blank"
                rel="noopener noreferrer"
              >
                React95
              </a>
              , an open-source Windows95 component library for React. If you're
              interested in this project even further check out the{" "}
              <a
                href="https://www.figma.com/community/file/1217110360892669474"
                target="_blank"
                rel="noopener noreferrer"
              >
                React95 component library on Figma
              </a>{" "}
              that I made as a past-time project.
            </p>
            <p>
              <a
                href="https://windowswallpaper.miraheze.org/wiki/File:Clouds_(Windows_95).png"
                target="_blank"
                rel="noopener noreferrer"
              >
                Background
              </a>{" "}
              by WindowsAesthetics /{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC BY-SA 4.0
              </a>
            </p>
          </S.styledModalFrame>
        </S.styledModal>
      )}
      {showSkillsModal && (
        <Modal
          className="styledModal"
          closeModal={handleCloseSkillsModal}
          title={"Skills.txt"}
          titleBarOptions={<TitleBar.Close onClick={handleCloseSkillsModal} />}
          icon={<Mspaint variant="16x16_4" />}
        >
          <S.styledModalFrame bg="white" boxShadow="$in">
            <h1>Some of my skills</h1>
            <p>
              I disagree with quantifying skills with numbers, percentages etc.
              - are skills really something people can measure? However, here is
              a rough estimate of my latest skills.
            </p>
            <br />
            <hr />
            <h2>Design tools</h2>
            <h3>Figma, Sketch</h3>
            <ProgressBar width={250} percent={90} />
            <h3>Adobe CC</h3>
            <ProgressBar width={250} percent={85} />
            <h3>Prototyping, wireframing, user flows</h3>
            <ProgressBar width={250} percent={80} />
            <h3>User testing, interviewing</h3>
            <ProgressBar width={250} percent={80} />
            <h3>WCAG 2.1</h3>
            <ProgressBar width={250} percent={75} />
            <br />
            <hr />
            <h2>Dev tools</h2>
            <h3>Storybook(JS)</h3>
            <ProgressBar width={250} percent={75} />
            <h3>HTML, CSS, SASS</h3>
            <ProgressBar width={250} percent={75} />
            <h3>Wordpress (PHP/Themes)</h3>
            <ProgressBar width={250} percent={70} />
            <h3>Git</h3>
            <ProgressBar width={250} percent={60} />
            <h3>Raspberry Pi & Arduino</h3>
            <ProgressBar width={250} percent={30} />
            <h3>React</h3>
            <ProgressBar width={250} percent={30} />
            <h3>Vue</h3>
            <ProgressBar width={250} percent={15} />
            <br />
            <hr />
            <h2>Other Skills</h2>
            <li>Agile methods</li>
            <li>Product development</li>
            <li>Project management</li>
            <li>Design systems</li>
            <li>User interviews</li>
            <li>User testing</li>
            <li>Wireframing and prototyping</li>
            <li>Visual design</li>
            <li>Research</li>
            <li>Copywriting and social media</li>
            <li>Content creation</li>
            <li>Workshops</li>
            <li>Facilitation</li>
            <li>Concept creation</li>
          </S.styledModalFrame>
        </Modal>
      )}
      {showPhotoModal && (
        <S.styledModal
          title={"janne_compressed_for_web.jpeg"}
          titleBarOptions={<TitleBar.Close onClick={handleClosePhotoModal} />}
          icon={<User variant="16x16_4" />}
        >
          <Frame boxShadow="none" className="fullWidthImage">
            <img
              src={Janne_pixelated}
              aria-hidden
              alt="Janne as a pixelated image"
              className="fullWidthImage"
            ></img>
          </Frame>
        </S.styledModal>
      )}
      {showVaporwaveModal && (
        <S.styledModal
          closeModal={handleCloseVaporwaveModal}
          height="100%"
          icon={<CdMusic variant="16x16_4" />}
          width={340}
          title="My_Alter_Ego.doc"
        >
          <h1>A Vaporwave Album</h1>
          <p>
            In 2018 I took part in a workshop in Lithuania at the Vilnius Art
            Academy in producing a Vaporwave Album with participants coming in
            from around Europe.
          </p>
          <p>
            Over the course of the weekend we produced music videos, songs and
            more. I produced two songs for the album and a music video. The
            album can be found on streaming services.
          </p>
          <a href="https://open.spotify.com/album/0pCqTDsI4zOZXZJnxx2yPT?si=JW5qpLJJQsO3eK2m65FQBQ">
            The album on Spotify
          </a>
          <p></p>
          <br></br>
          <div>
            <iframe
              src="https://www.youtube.com/embed/7SyxEF-QG_M"
              width="100%"
              title="A Song from a Vaporwave Album"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </S.styledModal>
      )}
      {showPortfolioModal && (
        <Portfolio closePortfolio={handleClosePortfolioModal} />
      )}
      {showCVModal && <CV closeCV={handleCloseCVModal} />}
      {showTunesModal && <Tunes closeTunes={handleCloseTunesModal} />}
    </>
  );
}

export default Desktop;