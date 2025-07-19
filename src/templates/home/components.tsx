import type { JSX } from 'solid-js/jsx-runtime';
import {
  profile,
  profileContainer,
  star,
  backgroundContainer,
  background,
  profileBox,
  profileImageEffect,
  profileImageBox,
  profileName,
  profileStatus,
  profileNameBox,
} from './index.module.css';
import { ParallaxContainer, ParallaxItem } from '../../components/parallax';
import ProfileBorder from './profile-border.svg?solid';

export function BackgroundImage(
  props: { imageUrl: string, },
) {
  return (
    <ParallaxContainer
      class={backgroundContainer}
      component="div"
    >
      <ParallaxItem
        layer={0}
        component="div"
        class={background}
        style={{
          'background-image': `url(${props.imageUrl})`,
        }}
      />
    </ParallaxContainer>
  );
}

export function StarsBackground() {
  const stars: JSX.Element[] = [];
  const count = 16 + Math.floor(Math.random() * 8);
  let oX = 0.01;
  for (let i = 0; i < count; i++) {
    const layer = 1 + Math.floor(Math.random() * 2);

    oX += (1 / count) * 0.98;

    const x = oX;
    const y = 0.025 + Math.random() * 0.95;

    stars.push(
      <ParallaxItem
        layer={layer}
        component="div"
        style={{
          position: 'absolute',
          left: String(x * 100) + '%',
          top: String(y * 100) + '%',
        }}
      >
        <div class={star} />
      </ParallaxItem>,
    );
  }

  return (
    <ParallaxContainer component="div" class={backgroundContainer}>
      {stars}
    </ParallaxContainer>
  );
}

export function Profile(
  props: {
    name: string,
    status: string,
    url: string,
    profileUrl: string,
  },
) {
  return (
    <ParallaxContainer
      component="div"
      class={profileContainer}
    >
      <ParallaxItem
        layer={4}
        component="div"
        class={profileBox}
      >
        <div class={profileImageBox}>
          <ProfileBorder class={profileImageEffect} />
          <img
            draggable={false}
            class={profile}
            src={props.profileUrl}
          />
        </div>
        <div class={profileNameBox}>
          <a class={profileName} href={props.url}>{props.name}</a>
          <span class={profileStatus}>{props.status}</span>
        </div>
      </ParallaxItem>
    </ParallaxContainer>
  );
}
