import { NextPage } from "next"
import styled from "styled-components"
import React, { useEffect, useRef, useState } from "react"

const CraftMapContainer = styled.div`
  display: flex;
  position: relative;
  .craft {
    .craft-filter {
      padding: 16px 24px;
      .craft-filter-ul {
        display: flex;

        li {
          border: 1px solid black;
          border-radius: 14px;
          padding: 0 13px;
          font-size: 1.1rem;
          margin-right: 0.5rem;
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

  #map {
    flex: 1;
    height: 100vh;
  }
`

const CraftMap: NextPage = () => {
  const [myLocation, setMyLocation] = useState<{ latitude: number; longitude: number } | string>("")
  const [shopList, setShopList] = useState([
    {
      id: 1,
      name: "깍쟁이 공방",
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
      setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 })
    }
  }, [])

  useEffect(() => {
    if (typeof myLocation !== "string")
      mapRef.current = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(myLocation.latitude, myLocation.longitude),
        zoomControl: true,
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
        if (!!selectedMarker.current) {
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
        <div className="craft-filter">
          <ul className="craft-filter-ul">
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
      <div id="map"></div>
    </CraftMapContainer>
  )
}

export default CraftMap
