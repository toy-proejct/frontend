import styled from "styled-components"
import React, { ReactElement, useEffect, useRef, useState } from "react"
import IconleftArrow from "../../../public/statics/craftmap/bi_arrow-left-circle.svg"
import CraftShopImage from "../../../public/statics/craftmap/craft-shop.jpg"
import { useRouter } from "next/router"
import Image from "next/image"

const CraftMapContainer = styled.div`
  display: flex;
  position: relative;

  hr {
    border: none;
    height: 1px;
    background: #ecf0f2;
  }

  .craft {
    display: flex;
    position: relative;
    .left {
      height: 100vh;
      overflow: hidden;
      border-right: 1px solid #ecf0f2;
      .craft-filter {
        padding: 16px 24px;
        .craft-filter-ul {
          display: flex;
          .left-arrow-icon {
            margin-right: 8px;
            transform: scale(0.8);
            cursor: pointer;
          }
          li {
            border: 1px solid #ecf0f2;
            border-radius: 18px;
            padding: 6px 16px;
            font-size: 15px;
            font-weight: 500;
            margin-right: 0.5rem;
            &:nth-child(2) {
              background: #35c5f0;
              color: white;
            }
          }
        }
      }

      .craft-shop {
        height: 100vh;
        overflow-y: auto;
        -ms-overflow-style: none;
        .craft-shop-ul {
          .craft-shop-li {
            display: flex;
            justify-content: space-between;
            padding: 1em 24px;
            .craft-shop-li-text {
              margin-right: 1em;
              h1 {
                font-size: 20px;
              }

              p:nth-child(3) {
                color: #8f8f8f;
                margin-bottom: 2.9em;
              }
              button {
                padding: 0.5em 1em;
                background: #35c5f0;
                border-radius: 12px;
                color: white;
              }
            }
            .craft-shop-li-img {
              img {
                width: 160px;
                height: 160px;
                border-radius: 14px;
              }
            }
          }
        }
      }
      .craft-shop::-webkit-scrollbar {
        display: none;
      }
    }
    .right {
      overflow: hidden;
      position: absolute;
      width: 380px;
      height: 100vh;
      background: white;
      z-index: 1;
      top: 0;
      left: 478px;
      .craft-shop-detail {
        padding-bottom: 24px;
        .craft-shop-info {
          padding: 10px 0;
          text-align: center;
          > h1 {
            display: inline-block;
            margin-right: 6px;
            font-size: 20px;
            font-weight: 700;
            letter-spacing: -1px;
            color: rgba(0, 0, 0, 1);
            > span {
              display: inline-block;
              color: rgba(143, 143, 143, 1);
              font-weight: 400;
              font-size: 14px;
              margin-left: 6px;
            }
          }
        }
        .craft-shop-user {
          margin-bottom: 12px;
          > span {
            color: #8f8f8f;
          }
          > span:nth-child(2)::before {
            display: inline-block;
            vertical-align: super;
            width: 3px;
            height: 3px;
            margin: 8px 6px 0;
            border-radius: 50%;
            background: #e1e1e1;
            background: #e1e1e1;
            content: "";
          }
        }
        .button-container {
          display: flex;
          justify-content: center;
          button {
            display: flex;
            align-items: center;
          }
          > button:nth-child(1) {
            vertical-align: top;
            padding: 7px 22px;
            border: 1px solid #35c5f0;
            border-radius: 18px;
            font-size: 16px;
            font-weight: 500;
            background: #fff;
            color: #35c5f0;
            cursor: pointer;
          }
          > button:nth-child(2) {
            vertical-align: top;
            padding: 7px 22px;
            border: 1px solid #35c5f0;
            border-radius: 18px;
            font-size: 16px;
            font-weight: 500;
            margin-left: 7px;
            background: #35c5f0;
            color: #fff;
          }
        }
      }
      hr {
        width: 100%;
        height: 12px;
        background: #e9ecef;
      }
      .detail-filter {
        display: flex;
        justify-content: space-evenly;
        border-bottom: 1px solid rgba(226, 229, 232, 1);
        padding: 12px 0;
        span {
          color: #8f8f8f;
        }
        > span:nth-child(1) {
          border-bottom: 3px solid black;
          color: black;
        }
      }
      .phone-number {
        margin: 0 14px;
        padding: 10px 0;
        border-bottom: 1px solid rgba(236, 240, 242, 1);
        > p {
          display: flex;
          align-items: center;
          font-size: 15px;
          color: #424242;
          svg {
            width: 24px;
            height: 24px;
            padding-top: 5px;
            path {
              fill: #9e9e9e;
            }
          }
        }
      }
      .location {
        margin: 0 14px;
        padding: 10px 0;
        border-bottom: 1px solid rgba(236, 240, 242, 1);
        > p {
          display: flex;
          align-items: center;
          font-size: 15px;
          color: #424242;
          svg {
            width: 24px;
            height: 24px;
            padding-top: 5px;
            path {
              fill: #9e9e9e;
            }
          }
        }
        > p:nth-child(2) {
          padding-left: 24px;
          span:nth-child(1) {
            background: rgb(137, 54, 224);
            font-size: 10px;
            padding: 2px 6px;
            border-radius: 50%;
            color: white;
            margin-right: 4px;
          }
          > span:nth-child(2) {
            color: #ff5757;
            font-size: 14px;
            padding-left: 4px;
          }
        }
      }
      .location-guide {
        margin: 0 14px;
        padding: 10px 0;
        border-bottom: 1px solid rgba(236, 240, 242, 1);
        > p {
          display: flex;
          font-size: 15px;
          color: #424242;
          svg {
            width: 24px;
            height: 24px;
            padding-top: 5px;
            margin-right: 6px;
            path {
              fill: #9e9e9e;
            }
          }
        }
      }
      .time {
        margin: 0 14px;
        padding: 10px 0;
        border-bottom: 1px solid rgba(236, 240, 242, 1);
        > p {
          display: flex;
          font-size: 15px;
          color: #424242;
          svg {
            width: 24px;
            height: 24px;
            padding-top: 5px;
            margin-right: 6px;
            path {
              fill: #9e9e9e;
            }
          }
        }
      }
      .price {
        margin: 0 14px;
        padding: 10px 0;
        border-bottom: 1px solid rgba(236, 240, 242, 1);
        > p {
          display: flex;
          font-size: 15px;
          color: #8f8f8f;
          svg {
            width: 24px;
            height: 24px;
            padding-top: 5px;
            margin-right: 6px;
            path {
              fill: #9e9e9e;
            }
          }
        }
      }
      .hashtag {
        margin: 0 14px;
        padding: 4px 0 12px 0;
        border-bottom: 1px solid rgba(236, 240, 242, 1);
        display: flex;
        align-items: baseline;
        .hashtag-container {
          display: flex;
          flex-wrap: wrap;
          span {
            display: inline-block;
            margin: 9px 6px 0 0;
            background: #f4f7f8;
            padding: 0 3px;
            color: #666;
          }
        }
        svg {
          width: 24px;
          height: 24px;
          padding-top: 5px;
          margin-right: 6px;
          path {
            fill: #9e9e9e;
          }
        }
      }
      .content {
        margin: 0 14px;
        padding: 10px 0 30px 0;
        border-bottom: 1px solid rgba(236, 240, 242, 1);
        > p {
          display: flex;
          font-size: 15px;
          color: #424242;
          svg {
            width: 60px;
            height: 40px;
            padding-top: 5px;
            margin-right: 6px;
            path {
              fill: #9e9e9e;
            }
          }
        }
      }
    }
  }

  #map {
    flex: 1;
    height: 100vh;
  }
`

export default function CraftMap() {
  const router = useRouter()
  const [myLocation, setMyLocation] = useState<
    | {
        latitude: number
        longitude: number
      }
    | string
  >("")
  const [shopList, setShopList] = useState([
    {
      id: 1,
      name: "공상가 공방",
      description: "기본반지 만들기 (1인) 30,000원",
      blogReviewCount: "49",
      map_y_location: 37.1,
      map_x_location: 127.1,
      marker: null,
    },
    {
      id: 2,
      name: "라이언 우영미 공방",
      description: "테이블 만들기 (1인) 30,000원",
      blogReviewCount: "24",
      map_y_location: 37.2,
      map_x_location: 127.2,
      marker: null,
    },
    {
      id: 3,
      name: "웨이비티빙 공방",
      description: "티비 선반 만들기 (1인) 30,000원",
      blogReviewCount: "1",
      map_y_location: 37.3,
      map_x_location: 127.3,
      marker: null,
    },
    {
      id: 4,
      name: "아쓰라챠 공방",
      description: "공책 수납함 만들기 (1인) 30,000원",
      blogReviewCount: "36",
      map_y_location: 38,
      map_x_location: 127.4,
      marker: null,
    },
    {
      id: 5,
      name: "웨이비 공방",
      description: "파도 모양 책상 만들기 (1인) 30,000원",
      blogReviewCount: "36",
      map_y_location: 37.4,
      map_x_location: 127.4,
      marker: null,
    },
    {
      id: 6,
      name: "프리오일리 공방",
      description: "공책 수납함 만들기 (1인) 30,000원",
      blogReviewCount: "36",
      map_y_location: 37.8,
      map_x_location: 127.8,
      marker: null,
    },
  ])

  const mapRef = useRef<HTMLElement | null | any>(null)
  const markerRef = useRef<any | null>(null)
  const selectedMarker = useRef<any | null>(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error)
    }

    // 위치추적에 성공했을때 위치 값을 넣어줍니다.
    function success(position: any) {
      setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    }

    // 위치 추적에 실패 했을때 초기값을 넣어줍니다.
    function error() {
      setMyLocation({
        latitude: 37.4979517,
        longitude: 127.0276188,
      })
    }
  }, [])

  useEffect(() => {
    if (typeof myLocation !== "string")
      mapRef.current = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(myLocation.latitude, myLocation.longitude),
        zoomControl: false,
      })
  }, [mapRef, myLocation])

  useEffect(() => {
    shopList?.map((shop) => {
      markerRef.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(shop.map_y_location, shop.map_x_location),
        map: mapRef.current,
        // icon: {
        //   content: ['<p>안녕</p><p>좋아</p>'].join(''),
        //   size: new naver.maps.Size(38, 58),
        //   anchor: new naver.maps.Point(19, 58),
        // },
      })
      shop.marker = markerRef.current
      markerClickEvent(markerRef.current, shop)
    })
  }, [mapRef, myLocation])

  function markerClickEvent(marker: any, item: any) {
    naver.maps.Event.addListener(marker, "click", (e: any) => {
      const mapLatLng = new naver.maps.LatLng(
        Number(item?.map_y_location),
        Number(item?.map_x_location),
      )

      // 선택한 마커로 부드럽게 이동합니다.
      mapRef.current.panTo(mapLatLng, e?.coord)

      if (
        !selectedMarker.current ||
        (selectedMarker.current !== marker && item.name !== undefined)
      ) {
        if (selectedMarker.current) {
          selectedMarker.current.setIcon()
        }
        selectedMarker.current = marker
        marker.setIcon({
          content: ["<p>하이라이트</p>"].join(""),
          size: new naver.maps.Size(38, 58),
          anchor: new naver.maps.Point(19, 58),
        })
      }
    })
  }

  const markerMove = (id: number) => {
    const shop: any = shopList.find((item) => item.id === id)
    shop.marker.trigger("click")
  }

  return (
    <CraftMapContainer>
      <div className="craft">
        <div className="left">
          <div className="craft-filter">
            <ul className="craft-filter-ul">
              <IconleftArrow className="left-arrow-icon" onClick={() => router.back()} />
              <li className="craft-filter-li">필터1</li>
              <li className="craft-filter-li">필터2</li>
              <li className="craft-filter-li">필터3</li>
            </ul>
          </div>
          <hr className="filter-shop-line" />
          <div className="craft-shop">
            <ul className="craft-shop-ul">
              {shopList.map((shop) => (
                <>
                  <li className="craft-shop-li" onClick={() => markerMove(shop.id)}>
                    <div className="craft-shop-li-text">
                      <h1>{shop.name}</h1>
                      <p>{shop.description}</p>
                      <p>블로그리뷰 {shop.blogReviewCount}</p>
                      <button>예약하기</button>
                    </div>
                    <div className="craft-shop-li-img">
                      <img src="/statics/craftmap/craft-shop.jpg" />
                    </div>
                  </li>
                  <hr />
                </>
              ))}
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="craft-shop-detail">
            <div className="img-container">
              <Image src={CraftShopImage} width="378px" height="210px" alt="상세페이지 이미지" />
            </div>
            <div className="craft-shop-info">
              <h1>
                공상가공방<span>공방</span>
              </h1>
              <div className="craft-shop-user">
                <span>
                  방문자리뷰 <span>1</span>
                </span>
                <span>
                  블로그리뷰 <span>4</span>
                </span>
              </div>
            </div>
            <div className="button-container">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="_1sD-y"
                  aria-hidden="true"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle cx="8" cy="8" r="5" fill="#35c5f0"></circle>
                    <path fill="#FFF" d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"></path>
                  </g>
                </svg>
                출발
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="_1sD-y"
                  aria-hidden="true"
                >
                  <g fill="none" fillRule="evenodd">
                    <path
                      fill="#FFF"
                      d="M3.32 9.36a5.72 5.72 0 0 1-1.12-3.4C2.2 2.8 4.8.2 8 .2s5.8 2.59 5.8 5.76a5.72 5.72 0 0 1-1.12 3.4L8 15.5 3.32 9.36z"
                    ></path>
                    <path
                      fill="#0A71E1"
                      d="M8 0C4.69 0 2 2.67 2 5.96A5.92 5.92 0 0 0 3.16 9.5L8 15.82l4.84-6.33A5.9 5.9 0 0 0 14 5.96C14 2.66 11.31 0 8 0m0 .4c3.09 0 5.6 2.5 5.6 5.56a5.51 5.51 0 0 1-1.08 3.28L8 15.16 3.48 9.25a5.55 5.55 0 0 1-.81-1.59 5.51 5.51 0 0 1-.27-1.7A5.58 5.58 0 0 1 8 .41"
                    ></path>
                    <path fill="#35c5f0" d="M8 8.5A2.5 2.5 0 0 1 5.5 6 2.5 2.5 0 1 1 8 8.5"></path>
                  </g>
                </svg>
                도착
              </button>
            </div>
          </div>
          <hr />
          <div className="detail-filter">
            <span>홈</span>
            <span>리뷰</span>
            <span>사진</span>
          </div>
          <div className="phone-number">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M2.92 1.15L.15 3.93a.5.5 0 0 0-.14.45 16.09 16.09 0 0 0 12.6 12.61.5.5 0 0 0 .46-.14l2.78-2.78a.5.5 0 0 0 0-.71l-4.18-4.18-.07-.06a.5.5 0 0 0-.64.06l-1.9 1.9-.28-.18a9.53 9.53 0 0 1-2.65-2.63L5.96 8 7.88 6.1a.5.5 0 0 0 0-.71L4.41 1.93l-.78-.78a.5.5 0 0 0-.7 0zm5.62 10.79l.37.21.09.04a.5.5 0 0 0 .49-.13l1.82-1.82 3.48 3.47-2.24 2.24-.07-.01A15.1 15.1 0 0 1 1.14 4.84l-.1-.4 2.24-2.23 3.54 3.53-1.84 1.84a.5.5 0 0 0-.08.6 10.54 10.54 0 0 0 3.64 3.76z"></path>
              </svg>
              0507-1354-1109
            </p>
          </div>
          <div className="location">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6.97a6.92 6.92 0 0 1-1.12 3.77l-5.51 7.08a.47.47 0 0 1-.74 0L2.1 10.71A6.93 6.93 0 0 1 1 6.97 7 7 0 0 1 8 0v.93V0a7 7 0 0 1 7 6.97zm-13 0c0 1.15.4 2.3.99 3.24L8 16.7l5.04-6.5A5.95 5.95 0 0 0 8 1C4.66 1 2 3.64 2 6.97zm6-1.54A1.58 1.58 0 0 0 8 8.6a1.57 1.57 0 0 0 0-3.16zm0-.93a2.51 2.51 0 0 1 0 5.02A2.51 2.51 0 1 1 8 4.5z"></path>
              </svg>
              서울 강동구 양재대로 101길 57
            </p>
            <p>
              <span>3</span>강동역 3번 출구에서 <span>507m</span>
            </p>
          </div>
          <div className="location-guide">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M10.24 1.08l4.35 4.35-.78.78-3.02-3.02V9.9l-7.69.03v7.14H2V8.84l7.69-.02V3.19L6.67 6.2l-.78-.78 4.35-4.35z"></path>
              </svg>
              강동역 3번 출구 - 강동웨딩홀끼고 오른쪽 -성내
              <br />
              도서관 골목으로 조금 들어오시면 오른쪽 1층상가에 위치하고 있습니다!
            </p>
          </div>
          <div className="time">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16A7 7 0 1 0 8 2a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 1a8 8 0 0 1 0 16zm.5-7.8l3.02 1.76a.5.5 0 0 1 .19.68.5.5 0 0 1-.69.19L7.8 9.96a.5.5 0 0 1-.3-.46v-5a.5.5 0 0 1 1 0v4.7z"></path>
              </svg>
              운영시간 : 24시
            </p>
          </div>
          <div className="price">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M8 17A8 8 0 1 0 8 1a8 8 0 0 0 0 16zm0-1A7 7 0 1 1 8 2a7 7 0 0 1 0 14zM4.33 9l1.03 3.75h1.08L7.6 9h.86l1.12 3.75h1.08L11.68 9H13V8h-1.04l.54-2h-1.02l-.51 2H9.14l-.6-2H7.6l-.62 2H5.14l-.5-2H3.5l.55 2H3v1h1.33zM5.4 9h1.28L6 11.21h-.04L5.4 9zm4.04 0h1.27l-.58 2.21h-.02L9.44 9zM8.16 8H7.9l.12-.36h.03l.1.36z"></path>
              </svg>
              가격표 사진을 올려주세요.
            </p>
          </div>
          <div className="hashtag">
            <svg xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 2.05l5.17 4.65a1 1 0 0 1 .33.74V17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.45a1 1 0 0 1 .33-.75L7.5 2.05V0h1v2.05zm4.34 5.44L8.34 3.3a.5.5 0 0 0-.68 0L3.16 7.5a.5.5 0 0 0-.16.36v8.65a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.86a.5.5 0 0 0-.16-.37zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            </svg>
            <div className="hashtag-container">
              <span>#천호취미미술</span>
              <span>#강동취미미술</span>
              <span>#강동화실</span>
              <span>#미술공방</span>
              <span>#성인미술</span>
            </div>
          </div>
          <div className="content">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M11 15V3H2v12h9zm1-6h3v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v6zm0 1v5h2v-5h-2zM4 5.5h5v1H4v-1zM4 8h5v1H4V8zm0 2.5h3v1H4v-1z"></path>
              </svg>
              소소하지만 따뜻한 공간, 강동,천호취미미술 '공상가'입니다. 그림을 좋아하는 사람들과
              함께 배우고, 그리고, 이야기하는 공간입니다. 소규모 1:1지도로 그림을 처음 접하는 분들,
              배웠던분들 누구든 가능해요:)
            </p>
          </div>
        </div>
      </div>
      <div id="map" />
    </CraftMapContainer>
  )
}

CraftMap.getLayout = function getLayout(page: ReactElement) {
  return { page }
}
