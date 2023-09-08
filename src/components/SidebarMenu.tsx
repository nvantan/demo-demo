import React from "react";

const SidebarMenu = () => {
  return (
    <div data-radium="true" style={{ width: 250, minWidth: 250 }}>
      <div
        data-radium="true"
        style={{
          width: "100%",
          textAlign: "center",
          display: "block",
          backgroundColor: "rgb(236, 236, 236)",
          height: "auto",
        }}
      >
        <div
          data-radium="true"
          style={{
            width: 250,
            display: "block",
            fontSize: 12,
            zIndex: 70,
            background: "rgb(255, 255, 255)",
            position: "fixed",
            top: 38,
          }}
        >
          <div
            data-radium="true"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 0px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
              height: "calc(100vh - 130px)",
              overflow: "hidden scroll",
              borderBottomRightRadius: 3,
              borderBottomLeftRadius: 3,
            }}
          >
            <div
              data-radium="true"
              style={{
                background: "rgb(85, 159, 187)",
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
              }}
            >
              <div
                className="bet-list"
                data-radium="true"
                style={{
                  flex: "1 1 0%",
                  color: "rgb(255, 255, 255)",
                  cursor: "pointer",
                  padding: 5,
                  whiteSpace: "nowrap",
                  fontSize: 12,
                  background: "rgb(85, 159, 187)",
                  fontWeight: "bold",
                  border: "none",
                }}
              >
                Phiếu Đặt Cược
              </div>
              <div
                className="bet-list"
                data-radium="true"
                style={{
                  flex: "1 1 0%",
                  color: "rgb(85, 159, 187)",
                  cursor: "pointer",
                  padding: 5,
                  whiteSpace: "nowrap",
                  fontSize: 12,
                  background: "rgb(255, 255, 255)",
                  fontWeight: "bold",
                  border: "1px solid rgb(85, 159, 187)",
                }}
              >
                Bảng Cược
              </div>
            </div>
            <div data-radium="true">
              <div data-radium="true">
                <div
                  data-radium="true"
                  style={{
                    background: "rgb(228, 239, 255)",
                    margin: 8,
                    padding: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    borderRadius: 3,
                  }}
                >
                  <div
                    data-radium="true"
                    style={{
                      background:
                        'url("https://sport.asportsb.com/images/ticket.svg") no-repeat',
                      width: 50,
                      height: 50,
                      display: "block",
                    }}
                  />
                  <div
                    data-radium="true"
                    style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: 13 }}
                  >
                    Phiếu cược của bạn trống.
                    <br />
                    Vui lòng nhấp vào tỷ lệ cược trong bảng để đưa ra lựa chọn
                    cược của bạn.
                  </div>
                </div>
              </div>
              <div
                data-radium="true"
                style={{
                  display: "flex",
                  flexFlow: "row",
                  alignItems: "center",
                  marginBottom: 0,
                  justifyContent: "space-evenly",
                  background: "rgb(180, 206, 221)",
                }}
              >
                <div
                  data-radium="true"
                  style={{
                    flex: "1 1 0%",
                    color: "rgb(255, 255, 255)",
                    cursor: "pointer",
                    padding: 5,
                    whiteSpace: "nowrap",
                    fontSize: 12,
                    background: "rgb(85, 159, 187)",
                    fontWeight: "bold",
                    border: "none",
                  }}
                >
                  Mọi môn thể thao
                </div>
              </div>
              <div
                data-radium="true"
                style={{
                  display: "flex",
                  flexFlow: "row",
                  alignItems: "center",
                  marginBottom: 0,
                  justifyContent: "space-evenly",
                  background: "rgb(180, 206, 221)",
                  padding: 8,
                  flex: "1 1 0%",
                  borderBottom: "none",
                }}
              >
                <div
                  className="period-item"
                  data-radium="true"
                  style={{
                    padding: 5,
                    cursor: "pointer",
                    flex: "1 1 0%",
                    position: "relative",
                    fontSize: 12,
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  Sớm
                </div>
                <div
                  className="period-item"
                  data-radium="true"
                  style={{
                    padding: 5,
                    cursor: "pointer",
                    flex: "1 1 0%",
                    position: "relative",
                    fontSize: 12,
                    color: "rgba(0, 0, 0, 0.6)",
                    background: "rgb(128, 154, 165)",
                    borderRadius: 3,
                    fontWeight: "bold",
                  }}
                >
                  Hôm nay
                </div>
                <div
                  className="period-item"
                  data-radium="true"
                  style={{
                    padding: 5,
                    cursor: "pointer",
                    flex: "1 1 0%",
                    position: "relative",
                    fontSize: 12,
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  Trực tiếp
                  <span
                    data-radium="true"
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: 0,
                      fontSize: 10,
                      background: "rgb(247, 88, 49)",
                      color: "rgb(255, 255, 255)",
                      width: 18,
                      height: 18,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      padding: "0px 2px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 0px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
                    }}
                  >
                    136
                  </span>
                </div>
              </div>
              <div
                className="sport-type-item"
                data-radium="true"
                style={{ background: "rgba(0, 0, 0, 0.1)" }}
              >
                <div
                  data-radium="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 6,
                    cursor: "pointer",
                  }}
                >
                  <span
                    data-radium="true"
                    style={{
                      background:
                        'url("https://sport.asportsb.com/images/soccer.svg") no-repeat',
                      width: 20,
                      height: 20,
                      display: "block",
                    }}
                  />
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      marginLeft: 6,
                      textAlign: "left",
                      flex: "10 1 0%",
                    }}
                  >
                    Bóng đá
                  </span>
                  <span
                    data-radium="true"
                    style={{
                      background: "rgb(247, 88, 49)",
                      padding: "3px 5px",
                      borderRadius: 3,
                      color: "rgb(255, 255, 255)",
                      fontWeight: "bold",
                      marginRight: 5,
                      boxShadow:
                        "rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 0px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
                    }}
                  >
                    Live
                  </span>
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      color: "rgba(0, 0, 0, 0.8)",
                      fontSize: 13,
                      minWidth: 30,
                      textAlign: "right",
                    }}
                  >
                    59
                  </span>
                </div>
                <div
                  data-radium="true"
                  style={{
                    background: "rgb(228, 239, 255)",
                    listStyle: "none",
                    margin: 0,
                    padding: 5,
                    textAlign: "left",
                  }}
                >
                  <li
                    className="market-type-item"
                    data-radium="true"
                    style={{
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 5,
                      marginLeft: 20,
                      position: "relative",
                      color: "rgba(0, 0, 0, 0.7)",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                    }}
                  >
                    <span
                      data-radium="true"
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "5px solid transparent",
                        borderBottom: "5px solid transparent",
                        borderLeft: "5px solid black",
                        position: "absolute",
                        marginRight: 10,
                        left: "-17px",
                        top: 6,
                      }}
                    />
                    Kèo chấp &amp; tài xỉu<span>245</span>
                  </li>
                  <li
                    className="market-type-item"
                    data-radium="true"
                    style={{
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 5,
                      marginLeft: 20,
                      position: "relative",
                      color: "rgba(0, 0, 0, 0.7)",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Tỷ lệ 1X2<span>238</span>
                  </li>
                  <li
                    className="market-type-item"
                    data-radium="true"
                    style={{
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 5,
                      marginLeft: 20,
                      position: "relative",
                      color: "rgba(0, 0, 0, 0.7)",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Tỷ số chính xác<span>50</span>
                  </li>
                  <li
                    className="market-type-item"
                    data-radium="true"
                    style={{
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 5,
                      marginLeft: 20,
                      position: "relative",
                      color: "rgba(0, 0, 0, 0.7)",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Lẻ/Chẵn<span>48</span>
                  </li>
                  <li
                    className="market-type-item"
                    data-radium="true"
                    style={{
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 5,
                      marginLeft: 20,
                      position: "relative",
                      color: "rgba(0, 0, 0, 0.7)",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Tổng số bàn thắng<span>41</span>
                  </li>
                  <li
                    className="market-type-item"
                    data-radium="true"
                    style={{
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 5,
                      marginLeft: 20,
                      position: "relative",
                      color: "rgba(0, 0, 0, 0.7)",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Hiệp 1/Toàn trận<span>6</span>
                  </li>
                  <li
                    className="market-type-item"
                    data-radium="true"
                    style={{
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 5,
                      marginLeft: 20,
                      position: "relative",
                      color: "rgba(0, 0, 0, 0.7)",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Bàn thắng đầu/cuối<span>0</span>
                  </li>
                  <li
                    className="market-type-item"
                    data-radium="true"
                    style={{
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 5,
                      marginLeft: 20,
                      position: "relative",
                      color: "rgba(0, 0, 0, 0.7)",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Cược chung cuộc<span>0</span>
                  </li>
                </div>
              </div>
              <div className="sport-type-item" data-radium="true">
                <div
                  data-radium="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 6,
                    cursor: "pointer",
                  }}
                >
                  <span
                    data-radium="true"
                    style={{
                      background:
                        'url("https://sport.asportsb.com/images/virtual_sport.svg") no-repeat',
                      width: 20,
                      height: 20,
                      display: "block",
                    }}
                  />
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      marginLeft: 6,
                      textAlign: "left",
                      flex: "10 1 0%",
                    }}
                  >
                    Thể thao ảo
                  </span>
                </div>
              </div>
              <div className="sport-type-item" data-radium="true">
                <div
                  data-radium="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 6,
                    cursor: "pointer",
                  }}
                >
                  <span
                    data-radium="true"
                    style={{
                      background:
                        'url("https://sport.asportsb.com/images/basketball.svg") no-repeat',
                      width: 20,
                      height: 20,
                      display: "block",
                    }}
                  />
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      marginLeft: 6,
                      textAlign: "left",
                      flex: "10 1 0%",
                    }}
                  >
                    Bóng rổ
                  </span>
                  <span
                    data-radium="true"
                    style={{
                      background: "rgb(247, 88, 49)",
                      padding: "3px 5px",
                      borderRadius: 3,
                      color: "rgb(255, 255, 255)",
                      fontWeight: "bold",
                      marginRight: 5,
                      boxShadow:
                        "rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 0px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
                    }}
                  >
                    Live
                  </span>
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      color: "rgba(0, 0, 0, 0.8)",
                      fontSize: 13,
                      minWidth: 30,
                      textAlign: "right",
                    }}
                  >
                    21
                  </span>
                </div>
              </div>
              <div className="sport-type-item" data-radium="true">
                <div
                  data-radium="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 6,
                    cursor: "pointer",
                  }}
                >
                  <span
                    data-radium="true"
                    style={{
                      background:
                        'url("https://sport.asportsb.com/images/tennis.svg") no-repeat',
                      width: 20,
                      height: 20,
                      display: "block",
                    }}
                  />
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      marginLeft: 6,
                      textAlign: "left",
                      flex: "10 1 0%",
                    }}
                  >
                    Quần vợt
                  </span>
                  <span
                    data-radium="true"
                    style={{
                      background: "rgb(247, 88, 49)",
                      padding: "3px 5px",
                      borderRadius: 3,
                      color: "rgb(255, 255, 255)",
                      fontWeight: "bold",
                      marginRight: 5,
                      boxShadow:
                        "rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 0px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
                    }}
                  >
                    Live
                  </span>
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      color: "rgba(0, 0, 0, 0.8)",
                      fontSize: 13,
                      minWidth: 30,
                      textAlign: "right",
                    }}
                  >
                    15
                  </span>
                </div>
              </div>
              <div className="sport-type-item" data-radium="true">
                <div
                  data-radium="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 6,
                    cursor: "pointer",
                  }}
                >
                  <span
                    data-radium="true"
                    style={{
                      background:
                        'url("https://sport.asportsb.com/images/volleyball.svg") no-repeat',
                      width: 20,
                      height: 20,
                      display: "block",
                    }}
                  />
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      marginLeft: 6,
                      textAlign: "left",
                      flex: "10 1 0%",
                    }}
                  >
                    Bóng chuyền
                  </span>
                  <span
                    data-radium="true"
                    style={{
                      background: "rgb(247, 88, 49)",
                      padding: "3px 5px",
                      borderRadius: 3,
                      color: "rgb(255, 255, 255)",
                      fontWeight: "bold",
                      marginRight: 5,
                      boxShadow:
                        "rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 0px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
                    }}
                  >
                    Live
                  </span>
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      color: "rgba(0, 0, 0, 0.8)",
                      fontSize: 13,
                      minWidth: 30,
                      textAlign: "right",
                    }}
                  >
                    23
                  </span>
                </div>
              </div>
              <div className="sport-type-item" data-radium="true">
                <div
                  data-radium="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 6,
                    cursor: "pointer",
                  }}
                >
                  <span
                    data-radium="true"
                    style={{
                      background:
                        'url("https://sport.asportsb.com/images/table-tennis.svg") no-repeat',
                      width: 20,
                      height: 20,
                      display: "block",
                    }}
                  />
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      marginLeft: 6,
                      textAlign: "left",
                      flex: "10 1 0%",
                    }}
                  >
                    Bóng bàn
                  </span>
                  <span
                    data-radium="true"
                    style={{
                      background: "rgb(247, 88, 49)",
                      padding: "3px 5px",
                      borderRadius: 3,
                      color: "rgb(255, 255, 255)",
                      fontWeight: "bold",
                      marginRight: 5,
                      boxShadow:
                        "rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 0px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
                    }}
                  >
                    Live
                  </span>
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      color: "rgba(0, 0, 0, 0.8)",
                      fontSize: 13,
                      minWidth: 30,
                      textAlign: "right",
                    }}
                  >
                    17
                  </span>
                </div>
              </div>
              <div className="sport-type-item" data-radium="true">
                <div
                  data-radium="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 6,
                    cursor: "pointer",
                  }}
                >
                  <span
                    data-radium="true"
                    style={{
                      background:
                        'url("https://sport.asportsb.com/images/badminton.svg") no-repeat',
                      width: 20,
                      height: 20,
                      display: "block",
                    }}
                  />
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      marginLeft: 6,
                      textAlign: "left",
                      flex: "10 1 0%",
                    }}
                  >
                    Cầu lông
                  </span>
                  <span
                    data-radium="true"
                    style={{
                      background: "rgb(247, 88, 49)",
                      padding: "3px 5px",
                      borderRadius: 3,
                      color: "rgb(255, 255, 255)",
                      fontWeight: "bold",
                      marginRight: 5,
                      boxShadow:
                        "rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 0px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
                    }}
                  >
                    Live
                  </span>
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      color: "rgba(0, 0, 0, 0.8)",
                      fontSize: 13,
                      minWidth: 30,
                      textAlign: "right",
                    }}
                  >
                    1
                  </span>
                </div>
              </div>
              <div className="sport-type-item" data-radium="true">
                <div
                  data-radium="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 6,
                    cursor: "pointer",
                  }}
                >
                  <span
                    data-radium="true"
                    style={{
                      background:
                        'url("https://sport.asportsb.com/images/mma.svg") no-repeat',
                      width: 20,
                      height: 20,
                      display: "block",
                    }}
                  />
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      marginLeft: 6,
                      textAlign: "left",
                      flex: "10 1 0%",
                    }}
                  >
                    Võ thuật tổng hợp
                  </span>
                </div>
              </div>
              <div className="sport-type-item" data-radium="true">
                <div
                  data-radium="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 6,
                    cursor: "pointer",
                  }}
                >
                  <span
                    data-radium="true"
                    style={{
                      background:
                        'url("https://sport.asportsb.com/images/keno.svg") no-repeat',
                      width: 20,
                      height: 20,
                      display: "block",
                    }}
                  />
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      marginLeft: 6,
                      textAlign: "left",
                      flex: "10 1 0%",
                    }}
                  >
                    Keno
                  </span>
                </div>
              </div>
              <div className="sport-type-item" data-radium="true">
                <div
                  data-radium="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 6,
                    cursor: "pointer",
                  }}
                >
                  <span
                    data-radium="true"
                    style={{
                      background:
                        'url("https://sport.asportsb.com/images/numbergame.svg") no-repeat',
                      width: 20,
                      height: 20,
                      display: "block",
                    }}
                  />
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      marginLeft: 6,
                      textAlign: "left",
                      flex: "10 1 0%",
                    }}
                  >
                    Number Game
                  </span>
                </div>
              </div>
              <div className="sport-type-item" data-radium="true">
                <div
                  data-radium="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 6,
                    cursor: "pointer",
                  }}
                >
                  <span
                    data-radium="true"
                    style={{
                      background:
                        'url("https://sport.asportsb.com/images/lode.svg") no-repeat',
                      width: 20,
                      height: 20,
                      display: "block",
                    }}
                  />
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      marginLeft: 6,
                      textAlign: "left",
                      flex: "10 1 0%",
                    }}
                  >
                    Lô đề
                  </span>
                </div>
              </div>
              <div className="sport-type-item" data-radium="true">
                <div
                  data-radium="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 6,
                    cursor: "pointer",
                  }}
                >
                  <span
                    data-radium="true"
                    style={{
                      background:
                        'url("https://sport.asportsb.com/images/lottery1.svg") no-repeat',
                      width: 20,
                      height: 20,
                      display: "block",
                    }}
                  />
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      marginLeft: 6,
                      textAlign: "left",
                      flex: "10 1 0%",
                    }}
                  >
                    Lottery A
                  </span>
                </div>
              </div>
              <div className="sport-type-item" data-radium="true">
                <div
                  data-radium="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 6,
                    cursor: "pointer",
                  }}
                >
                  <span
                    data-radium="true"
                    style={{
                      background:
                        'url("https://sport.asportsb.com/images/lottery2.svg") no-repeat',
                      width: 20,
                      height: 20,
                      display: "block",
                    }}
                  />
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      marginLeft: 6,
                      textAlign: "left",
                      flex: "10 1 0%",
                    }}
                  >
                    Lottery B
                  </span>
                </div>
              </div>
              <div className="sport-type-item" data-radium="true">
                <div
                  data-radium="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 6,
                    cursor: "pointer",
                  }}
                >
                  <span
                    data-radium="true"
                    style={{
                      background:
                        'url("https://sport.asportsb.com/images/fish.svg") no-repeat',
                      width: 20,
                      height: 20,
                      display: "block",
                    }}
                  />
                  <span
                    data-radium="true"
                    style={{
                      fontWeight: "bold",
                      marginLeft: 6,
                      textAlign: "left",
                      flex: "10 1 0%",
                    }}
                  >
                    Bắn cá
                  </span>
                </div>
              </div>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".period-item:hover{background: rgba(0, 0, 0, .1);\nopacity: 1;\ntransition: 0.3s opacity ease-out 0s;\nborder-radius: 3px;\nfont-weight: bold;}.bet-list:hover{background: #559fbb !important;\ncolor: #FFF !important;\nopacity: 0.6;\nfont-weight: bold;\ntransition: 0.3s opacity ease-out 0s;}.market-type-item:hover{background: rgba(0, 0, 0, .05);\nborder-radius: 3px;}.sport-type-item:hover{background: rgba(0, 0, 0, .05);}",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
