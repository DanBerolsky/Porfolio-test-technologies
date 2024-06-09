import { ImageResponse } from 'next/og';
import { getGithubProyects } from './lib/data';
import RepositoriesIcon from '../../public/icon/repositoriesIcon';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const container = {
  position: 'relative' as 'relative',
  display: 'flex',
  height: 'auto',
  width: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
  filter: 'blur(0px)',
  borderRadius: '20px',
  fontSize: '50px',
  padding: '19px',
  };
  
  // Image generation
  export default async function OpenGraph() {
    const repositories = await getGithubProyects(
      process.env.NEXT_OG_GIT_URL as string
      );
      const repositoriesNumber = repositories.length;
      
      return new ImageResponse(
        (
          // ImageResponse JSX element
          <div
          style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20px',
          position: 'relative' as 'relative',
          backgroundImage: `url(${
            process.env.NEXT_OG_BACKGROUND_IMG_URL as string
          })`,
        }}
      >
        <div style={container}>🚀🚀🚀🚀🚀</div>
        <div style={container}>
          <RepositoriesIcon />
          <div style={{ letterSpacing: '4px', margin: '0 7px' }}>
            Repositories
          </div>
          <div
            style={{ padding: '10px', fontSize: '50px' }}
          >{`${repositoriesNumber}`}</div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
