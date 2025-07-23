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
import { ParallaxContainer, ParallaxItem } from '@components/parallax';
import ProfileBorder from './profile-border.svg?solid';

export function HomeBackground(
  props: { imageUrl: string, },
) {
  return (
    <ParallaxContainer
      class={backgroundContainer}
      component="div"
    >
      <ParallaxItem
        layer={0}
        component="img"
        class={background}
        src={props.imageUrl}
      />
    </ParallaxContainer>
  );
}

export type ProfileProps = {
  name: string,
  status: string,
  imageUrl: string,
};

export function Profile(props: ProfileProps) {
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
            src={props.imageUrl}
          />
        </div>
        <div class={profileNameBox}>
          <span class={profileName}>{props.name}</span>
          <span class={profileStatus}>{props.status}</span>
        </div>
      </ParallaxItem>
    </ParallaxContainer>
  );
}
