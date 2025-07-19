import {
  profile,
  profileContainer,
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
