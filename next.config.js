/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    const proxies = [];
    console.log("현재 시스템이 뭔지 ? :::: " , process.env.SYSTEM);
    if (process.env.SYSTEM === 'local') {
      console.log("이쪽으로 들어와?");
      proxies.push({
        source: '/storage/:path*',
        destination: 'http://localhost:4000/storage/:path*',
      });
      console.log("22222 : ", proxies);
    } else if(process.env.SYSTEM === 'dev') {
      //TODO: NAS를 public/storage 에 붙였을 경우 추가 셋팅 필요 없음. NAS위치에 따라 처리 필요.
      proxies.push({
        source: '/storage/:path*',
        destination: 'http://localhost:4000/storage/:path*',
      });
    }else if(process.env.SYSTEM === 'prod'){      
      proxies.push({
        source: '/storage/:path*',
        destination: 'http://localhost:4000/storage/:path*',
      });      
    }
    
    proxies.push({
      source: '/api/v1/:path*',
      destination: 'http://localhost:4000/api/v1/:path*',
    });
    return proxies;
  },
};

module.exports = nextConfig;
