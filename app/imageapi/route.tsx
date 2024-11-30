import { ImageResponse } from "next/og";

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Your text";
  let width: number = parseInt(url.searchParams.get("width") || "1024") || 1024;
  let height: number = parseInt(url.searchParams.get("height") || "1024") || 1024;
  let color = url.searchParams.get("color") || "white";
  let bgcolor = url.searchParams.get("bgcolor") || "black";
  let fontsize = parseInt(url.searchParams.get("font") || "100") || 100;

  const imageResponse = new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full items-center justify-center"
        style={{
          backgroundColor: bgcolor,
          color: color,
        }}
      >
        <div
          tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-center p-8"
        >
          <h2
            tw="flex flex-col text-4xl font-bold tracking-tight text-center"
            style={{
              fontSize: fontsize,
            }}
          >
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: width,
      height: height,
    }
  );

 
  const headers = new Headers({
    "Content-Type": "image/png",
    "Access-Control-Allow-Origin": "*", 
    "Access-Control-Allow-Methods": "GET", 
  });

  return new Response(imageResponse.body, {
    headers,
  });
}
