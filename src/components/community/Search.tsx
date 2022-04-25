import styled from "styled-components";
import React, { useState } from "react";

const SearchContainer = styled.div`
    padding: 40px 15px 30px;
    background-color: rgb(247, 249, 250);
    
    .search-container {
        max-width: 500px;
        margin: 0px auto;
        .title {
            text-align: center;
            h1 {
                margin: 0px 0px 12px;
                text-align: center;
                font-weight: bold;
                font-size: 24px;
                line-height: 32px;
                color: rgb(47, 52, 56);
            }
            p {
                margin: 0px 0px 30px;
                text-align: center;
                font-size: 14px;
                line-height: 20px;
                color: rgb(47, 52, 56);
                word-break: keep-all;
            }
        }

        .search {
            position: relative;
            margin-bottom: 24px;
            input {
                width: 100%;
                box-sizing: border-box;
                padding: 9px 15px 9px 47px;
                text-align: left;
                font-family: inherit;
                font-size: 16px;
                line-height: 20px;
                color: #2F3438;
                background-color: #FFFFFF;
                border: 1px solid #EAEDEF;
                box-shadow: 0 2px 5px rgb(63 71 77 / 5%);
                border-radius: 4px;
                -webkit-transition: .1s background-color;
                transition: .1s background-color;
                outline: none;
                &:hover {
                    background-color: rgb(247, 249, 250);
                }
            }
            img {
                position: absolute;
                width: 21px;
                left: 16px;
                top: 10px;
            }
        }

        .popular {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 11px;

            > span {
                font-size: 12px;
                line-height: 16px;
                font-weight: bold;
                color: #2F3438;
            }

            .popular-list {
                span {
                    display: inline-block;
                    margin-right: 5px;
                    padding: 4px 12px;
                    font-size: 12px;
                    color: #2F3438;
                    background-color: #FFFFFF;
                    border: 1px solid #EAEDEF;
                    border-radius: 50px;
                    -webkit-transition: .1s opacity;
                    transition: .1s opacity;

                    &:hover {
                        opacity: 0.6;
                    }
                }
            }
            .search-keyword {
                display: flex;
                align-items: center;
            }
        }
    }
`;

const Search: React.FC = () => {
    const [popularList,setPopularList] = useState(['리모델링/올수리','20평대','아파트','도배']);

  return (
    <SearchContainer>
        <div className="search-container">
            <div className="title">
                <h1>질문과 답변</h1>
                <p>Value Board 커스텀 고수들과 전문가들에게 조언을 받아보세요.</p>
            </div>
            <div className="search">
                <input type='text' placeholder="궁금한 것을 검색해보세요."/>
                <img src="/statics/community/entypo_magnifying-glass.svg" alt='검색아이콘'/>
            </div>
            <div className="popular">
                <span>인기</span>
                <div className="popular-list">
                    {popularList.map(item=> (
                        <span>#{item}</span>
                    ) )}
                </div>
                <div className="search-keyword">
                    <span>키워드 더보기</span>
                    <img src="/statics/community/dashicons_arrow-down-alt2.svg" alt='더보기아이콘'/>
                </div>
            </div>
        </div>
    </SearchContainer>
  );
};

export default Search;
