import './index.css';
import Image from 'next/image';
import DarkModeButton from './DarkModeButton';
import DownloadResume from './DownloadResume';
import { Profile } from '@/app/lib/definitions';

export default function Avatar(prop: { profileData: Profile }) {
  return (
    <div className='avatar-card card'>
      <div className='avatar-card__background-image'>
        <Image
          src='/back.png'
          alt='background_image'
          width={200}
          height={60}
          priority={true}
        />
        <DarkModeButton />
      </div>
      <Image
        className='avatar-card__img'
        src={prop.profileData.avatarImageURL}
        alt={prop.profileData.name}
        height={80}
        width={80}
        quality={50}
      />
      <h5 className='avatar-card__name'>{prop.profileData.name}</h5>
      <div className='avatar-card__info'>{prop.profileData.description}</div>
      <DownloadResume resumenURL={prop.profileData.resumenURL} />
    </div>
  );
}
