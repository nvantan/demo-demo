import React from "react";

import dataMock from "@/components/data.json";

const ContentHome = () => {
  return (
    <div data-radium="true" style={{ marginLeft: 8, flex: "1 1 0%" }}>
      <sport-book-container data-radium="true" style={{ width: "100%" }}>
        <sport-book-component data-radium="true" style={{ width: "100%" }}>
          <soccer-component data-radium="true" style={{ width: "100%" }}>
            <handicap-ou-component data-radium="true">
              <div
                data-radium="true"
                style={{
                  width: "100%",
                  display: "block",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              >
                <div data-radium="true" style={{}}>
                  <div
                    data-radium="true"
                    style={{
                      display: "flex",
                      height: 60,
                      background: "rgb(85, 159, 187)",
                    }}
                  >
                    <match-header-component
                      data-radium="true"
                      style={{
                        flex: "1 1 0%",
                        borderLeft: "1px solid rgba(0, 0, 0, 0)",
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                      }}
                    >
                      <span
                        data-radium="true"
                        style={{
                          width: 20,
                          height: "100%",
                          borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          data-radium="true"
                          style={{
                            borderRight: "1px solid rgb(77, 78, 79)",
                            borderBottom: "1px solid rgb(77, 78, 79)",
                            width: 8,
                            height: 8,
                            transition: "all 0.3s ease-out 0s",
                            transform: "rotate(45deg)",
                            position: "relative",
                            top: "-2px",
                          }}
                        />
                      </span>
                      <div
                        data-radium="true"
                        style={{
                          fontSize: 14,
                          color: "rgb(255, 255, 255)",
                          fontWeight: "bold",
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          alignItems: "center",
                          justifyContent: "center",
                          flex: "10 1 0%",
                        }}
                      >
                        Trận đấu
                      </div>
                      <div
                        data-radium="true"
                        style={{
                          background: "rgb(247, 88, 49)",
                          padding: "5px 7px",
                          borderBottomRightRadius: 5,
                          borderBottomLeftRadius: 5,
                          color: "rgb(255, 255, 255)",
                          fontWeight: "bold",
                          marginRight: 5,
                          position: "absolute",
                          top: 0,
                          left: 28,
                          fontSize: 12,
                          boxShadow:
                            "rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 0px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
                        }}
                      >
                        Trực tiếp
                      </div>
                    </match-header-component>
                    <div
                      data-radium="true"
                      style={{
                        flex: "1 1 0%",
                        borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        data-radium="true"
                        style={{
                          flex: "1 1 0%",
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          alignItems: "center",
                          justifyContent: "center",
                          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                          fontSize: 14,
                          color: "rgb(255, 255, 255)",
                          fontWeight: "bold",
                        }}
                      >
                        Toàn trận
                      </div>
                      <div
                        data-radium="true"
                        style={{
                          flex: "1 1 0%",
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          data-radium="true"
                          style={{
                            flex: "1 1 0%",
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 14,
                            color: "rgb(255, 255, 255)",
                            fontWeight: "bold",
                            borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          Kèo chấp
                        </div>
                        <div
                          data-radium="true"
                          style={{
                            flex: "1 1 0%",
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 14,
                            color: "rgb(255, 255, 255)",
                            fontWeight: "bold",
                            borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          Tài Xỉu
                        </div>
                        <div
                          data-radium="true"
                          style={{
                            flex: "1 1 0%",
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 14,
                            color: "rgb(255, 255, 255)",
                            fontWeight: "bold",
                          }}
                        >
                          1X2
                        </div>
                      </div>
                    </div>
                    <div
                      data-radium="true"
                      style={{
                        flex: "1 1 0%",
                        borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        data-radium="true"
                        style={{
                          flex: "1 1 0%",
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          alignItems: "center",
                          justifyContent: "center",
                          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                          fontSize: 14,
                          color: "rgb(255, 255, 255)",
                          fontWeight: "bold",
                        }}
                      >
                        Hiệp 1
                      </div>
                      <div
                        data-radium="true"
                        style={{
                          flex: "1 1 0%",
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          data-radium="true"
                          style={{
                            flex: "1 1 0%",
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 14,
                            color: "rgb(255, 255, 255)",
                            fontWeight: "bold",
                            borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          Kèo chấp
                        </div>
                        <div
                          data-radium="true"
                          style={{
                            flex: "1 1 0%",
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 14,
                            color: "rgb(255, 255, 255)",
                            fontWeight: "bold",
                            borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          Tài Xỉu
                        </div>
                        <div
                          data-radium="true"
                          style={{
                            flex: "1 1 0%",
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 14,
                            color: "rgb(255, 255, 255)",
                            fontWeight: "bold",
                          }}
                        >
                          1X2
                        </div>
                      </div>
                    </div>
                    <div
                      data-radium="true"
                      style={{
                        width: 100,
                        borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                        borderRight: "1px solid rgba(0, 0, 0, 0)",
                      }}
                    />
                  </div>

                  {/* map data */}
                  {dataMock.map((item) => (
                    <league-component
                      key={item.id}
                      data-radium="true"
                      style={{ display: "block" }}
                    >
                      <league-header-component
                        data-radium="true"
                        style={{
                          display: "flex",
                          height: 35,
                          alignItems: "center",
                          background: "rgb(185, 211, 219)",
                          cursor: "pointer",
                        }}
                      >
                        <span
                          data-radium="true"
                          style={{
                            width: 20,
                            height: "100%",
                            borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                            borderLeft: "1px solid rgba(0, 0, 0, 0)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            data-radium="true"
                            style={{
                              borderRight: "1px solid rgb(77, 78, 79)",
                              borderBottom: "1px solid rgb(77, 78, 79)",
                              width: 8,
                              height: 8,
                              transition: "all 0.3s ease-out 0s",
                              transform: "rotate(45deg)",
                              position: "relative",
                              top: "-2px",
                            }}
                          />
                        </span>
                        <league-title-component
                          data-radium="true"
                          style={{
                            fontSize: 14,
                            fontWeight: "bold",
                            paddingLeft: 58,
                            textTransform: "uppercase",
                            display: "flex",
                          }}
                        >
                          <div
                            title="Lưu vào danh sách yêu thích"
                            data-radium="true"
                            style={{
                              background:
                                'url("https://sport.asportsb.com/images/favorite.svg") no-repeat',
                              width: 14,
                              height: 14,
                              display: "block",
                              cursor: "pointer",
                              marginRight: 8,
                              position: "relative",
                              zIndex: 10,
                              opacity: "0.5",
                            }}
                          />
                          {item.name}
                        </league-title-component>
                      </league-header-component>

                      {item.matches.map((match) => (
                        <div
                          key={match.id}
                          data-radium="true"
                          style={{
                            height: "auto",
                            opacity: 1,
                            visibility: "visible",
                            transition: "all 0.3s ease-out 0s",
                          }}
                        >
                          <div
                            className="match-component"
                            data-radium="true"
                            style={{
                              display: "block",
                              borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                              borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                              background: "rgb(239, 224, 213)",
                              position: "relative",
                            }}
                          >
                            {/* count quantity row use */}
                            {/* hard core 3 */}
                            {Array.from({ length: 3 }).map((_, index) => (
                              <match-component
                                key={index}
                                data-radium="true"
                                style={{
                                  display: "flex",
                                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                                }}
                              >
                                {/* name team */}
                                {index === 0 ? (
                                  <div
                                    data-radium="true"
                                    style={{
                                      flex: "1 1 0%",
                                      borderRight:
                                        "1px solid rgba(0, 0, 0, 0.1)",
                                      display: "flex",
                                      alignItems: "center",
                                      position: "relative",
                                    }}
                                  >
                                    <div
                                      data-radium="true"
                                      style={{
                                        width: 70,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                      }}
                                    />
                                    <div
                                      data-radium="true"
                                      style={{
                                        height: "100%",
                                        flex: "10 1 0%",
                                        display: "flex",
                                        flexDirection: "column",
                                        borderLeft:
                                          "1px solid rgba(0, 0, 0, 0.1)",
                                        minWidth: 165,
                                      }}
                                    >
                                      <div
                                        data-radium="true"
                                        style={{
                                          flex: "1 1 0%",
                                          fontSize: 14,
                                          fontWeight: "bold",
                                          color: "rgb(63, 63, 63)",
                                          paddingLeft: 10,
                                          lineHeight: "24px",
                                          maxWidth: 205,
                                        }}
                                      >
                                        {match.teamAName}
                                      </div>
                                      <div
                                        data-radium="true"
                                        style={{
                                          flex: "1 1 0%",
                                          fontSize: 14,
                                          fontWeight: "bold",
                                          color: "rgb(237, 84, 40)",
                                          paddingLeft: 10,
                                          lineHeight: "24px",
                                          maxWidth: 205,
                                        }}
                                      >
                                        {match.teamBName}
                                      </div>
                                      <div
                                        data-radium="true"
                                        style={{
                                          flex: "1 1 0%",
                                          paddingLeft: 10,
                                          fontSize: 14,
                                          fontWeight: "bold",
                                          color: "rgba(0, 0, 0, 0.4)",
                                          lineHeight: "24px",
                                        }}
                                      >
                                        Hòa
                                      </div>
                                    </div>
                                    <div
                                      title="Lưu vào danh sách yêu thích"
                                      data-radium="true"
                                      style={{
                                        background:
                                          'url("https://sport.asportsb.com/images/favorite.svg") no-repeat',
                                        width: 14,
                                        height: 14,
                                        display: "block",
                                        cursor: "pointer",
                                        position: "absolute",
                                        zIndex: 10,
                                        top: 5,
                                        right: 5,
                                        opacity: "0.5",
                                      }}
                                    />
                                  </div>
                                ) : (
                                  <div
                                    data-radium="true"
                                    style={{
                                      flex: "1 1 0%",
                                      borderRight:
                                        "1px solid rgba(0, 0, 0, 0.1)",
                                      display: "flex",
                                      alignItems: "center",
                                      position: "relative",
                                    }}
                                  >
                                    <div
                                      data-radium="true"
                                      style={{
                                        width: 70,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                      }}
                                    />
                                    <div
                                      data-radium="true"
                                      style={{
                                        height: "100%",
                                        flex: "10 1 0%",
                                        display: "flex",
                                        flexDirection: "column",
                                        borderLeft:
                                          "1px solid rgba(0, 0, 0, 0.1)",
                                        minWidth: 165,
                                      }}
                                    />
                                  </div>
                                )}

                                {/* full match */}
                                <div
                                  data-radium="true"
                                  style={{
                                    flex: "1 1 0%",
                                    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  {/* handicap */}
                                  <div
                                    data-radium="true"
                                    style={{
                                      flex: "1 1 0%",
                                      display: "flex",
                                      height: "100%",
                                    }}
                                  >
                                    <div
                                      data-radium="true"
                                      style={{
                                        flex: "3 1 0%",
                                        fontSize: 14,
                                        color: "rgba(0, 0, 0, 0.5)",
                                        display: "flex",
                                        flexDirection: "column",
                                        paddingLeft: 1,
                                        paddingRight: 1,
                                        paddingTop: 3,
                                      }}
                                    >
                                      <div
                                        data-radium="true"
                                        style={{
                                          fontSize: 14,
                                          color: "rgba(0, 0, 0, 0.5)",
                                          fontWeight: "bold",
                                          marginBottom: 3,
                                          flex: "2 1 0%",
                                          display: "flex",
                                          borderRadius: 3,
                                          alignItems: "center",
                                          maxHeight: 20,
                                        }}
                                      />
                                      <div
                                        data-radium="true"
                                        style={{
                                          fontSize: 14,
                                          color: "rgba(0, 0, 0, 0.5)",
                                          fontWeight: "bold",
                                          marginBottom: 3,
                                          flex: "2 1 0%",
                                          display: "flex",
                                          borderRadius: 3,
                                          alignItems: "center",
                                          maxHeight: 20,
                                        }}
                                      >
                                        1-1.5
                                        {/* kiểm tra quy luật BetRate */}
                                      </div>
                                    </div>
                                    <div
                                      data-radium="true"
                                      style={{
                                        flex: "3 1 0%",
                                        fontSize: 14,
                                        color: "rgba(0, 0, 0, 0.5)",
                                        display: "flex",
                                        flexDirection: "column",
                                        paddingLeft: 1,
                                        paddingRight: 1,
                                        paddingTop: 3,
                                      }}
                                    >
                                      {match.fullMatch.handicap?.[
                                        index
                                      ]?.winRates?.map((winRates) => (
                                        <div
                                          key={winRates}
                                          className="odd-item "
                                          id="odd-item-0HC477060100251807745HMM"
                                          data-radium="true"
                                          style={{
                                            position: "relative",
                                            marginBottom: 3,
                                            flex: "1 1 0%",
                                            display: "flex",
                                            alignItems: "center",
                                            borderRadius: 3,
                                            paddingLeft: 8,
                                            paddingRight: 8,
                                            maxHeight: 20,
                                          }}
                                        >
                                          <div
                                            data-radium="true"
                                            style={{
                                              textAlign: "right",
                                              flex: "1 1 0%",
                                              fontWeight: "bold",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              cursor: "pointer",
                                              minHeight: 20,
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "flex-end",
                                              position: "relative",
                                              zIndex: 20,
                                            }}
                                          >
                                            {winRates}
                                          </div>
                                        </div>
                                      ))}

                                      <div
                                        className="odd-item "
                                        id=""
                                        data-radium="true"
                                        style={{
                                          position: "relative",
                                          marginBottom: 0,
                                          flex: "1 1 0%",
                                          display: "flex",
                                          alignItems: "center",
                                          borderRadius: 3,
                                          paddingLeft: 8,
                                          paddingRight: 8,
                                          maxHeight: 20,
                                        }}
                                      />
                                    </div>
                                  </div>

                                  {/* overUnder */}
                                  <div
                                    data-radium="true"
                                    style={{
                                      flex: "1 1 0%",
                                      display: "flex",
                                      height: "100%",
                                    }}
                                  >
                                    <div
                                      data-radium="true"
                                      style={{
                                        flex: "3 1 0%",
                                        fontSize: 14,
                                        color: "rgba(0, 0, 0, 0.5)",
                                        display: "flex",
                                        flexDirection: "column",
                                        paddingLeft: 1,
                                        paddingRight: 1,
                                        paddingTop: 3,
                                      }}
                                    >
                                      <div
                                        data-radium="true"
                                        style={{
                                          fontSize: 14,
                                          color: "rgba(0, 0, 0, 0.5)",
                                          fontWeight: "bold",
                                          marginBottom: 3,
                                          flex: "2 1 0%",
                                          display: "flex",
                                          borderRadius: 3,
                                          alignItems: "center",
                                          maxHeight: 20,
                                        }}
                                      >
                                        3.5-4
                                      </div>
                                    </div>

                                    <div
                                      data-radium="true"
                                      style={{
                                        flex: "3 1 0%",
                                        fontSize: 14,
                                        color: "rgba(0, 0, 0, 0.5)",
                                        display: "flex",
                                        flexDirection: "column",
                                        paddingLeft: 1,
                                        paddingRight: 1,
                                        paddingTop: 3,
                                      }}
                                    >
                                      {match.fullMatch?.overUnder?.[
                                        index
                                      ]?.winRates?.map((winRates) => (
                                        <div
                                          key={winRates}
                                          className="odd-item "
                                          id="odd-item-0OU477060100260196352OMM"
                                          data-radium="true"
                                          style={{
                                            position: "relative",
                                            marginBottom: 3,
                                            flex: "1 1 0%",
                                            display: "flex",
                                            alignItems: "center",
                                            borderRadius: 3,
                                            paddingLeft: 8,
                                            paddingRight: 8,
                                            maxHeight: 20,
                                          }}
                                        >
                                          <div
                                            data-radium="true"
                                            style={{
                                              textAlign: "right",
                                              flex: "1 1 0%",
                                              fontWeight: "bold",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              cursor: "pointer",
                                              minHeight: 20,
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "flex-end",
                                              position: "relative",
                                              zIndex: 20,
                                            }}
                                          >
                                            {winRates}
                                          </div>
                                        </div>
                                      ))}

                                      <div
                                        className="odd-item "
                                        id=""
                                        data-radium="true"
                                        style={{
                                          position: "relative",
                                          marginBottom: 0,
                                          flex: "1 1 0%",
                                          display: "flex",
                                          alignItems: "center",
                                          borderRadius: 3,
                                          paddingLeft: 8,
                                          paddingRight: 8,
                                          maxHeight: 20,
                                        }}
                                      />
                                    </div>
                                  </div>

                                  {/* double */}
                                  {match.fullMatch?.double?.length ? (
                                    <div
                                      data-radium="true"
                                      style={{
                                        flex: "1 1 0%",
                                        display: "flex",
                                        height: "100%",
                                      }}
                                    >
                                      <div
                                        data-radium="true"
                                        style={{
                                          flex: "3 1 0%",
                                          fontSize: 14,
                                          color: "rgba(0, 0, 0, 0.5)",
                                          display: "flex",
                                          flexDirection: "column",
                                          paddingLeft: 1,
                                          paddingRight: 1,
                                          paddingTop: 3,
                                        }}
                                      >
                                        <div
                                          data-radium="true"
                                          style={{
                                            fontSize: 14,
                                            color: "rgba(0, 0, 0, 0.5)",
                                            fontWeight: "bold",
                                            marginBottom: 3,
                                            flex: "2 1 0%",
                                            display: "flex",
                                            borderRadius: 3,
                                            alignItems: "center",
                                            maxHeight: 20,
                                          }}
                                        />
                                      </div>
                                      <div
                                        data-radium="true"
                                        style={{
                                          flex: "3 1 0%",
                                          fontSize: 14,
                                          color: "rgba(0, 0, 0, 0.5)",
                                          display: "flex",
                                          flexDirection: "column",
                                          paddingLeft: 1,
                                          paddingRight: 1,
                                          paddingTop: 3,
                                        }}
                                      >
                                        {match.fullMatch?.double?.map(
                                          (double) => (
                                            <div
                                              key={double}
                                              className="odd-item "
                                              id="odd-item-0ML485881149563170816H"
                                              data-radium="true"
                                              style={{
                                                position: "relative",
                                                marginBottom: 3,
                                                flex: "1 1 0%",
                                                display: "flex",
                                                alignItems: "center",
                                                borderRadius: 3,
                                                paddingLeft: 8,
                                                paddingRight: 8,
                                                maxHeight: 20,
                                              }}
                                            >
                                              <div
                                                data-radium="true"
                                                style={{
                                                  textAlign: "right",
                                                  flex: "1 1 0%",
                                                  fontWeight: "bold",
                                                  color: "rgba(0, 0, 0, 0.8)",
                                                  cursor: "pointer",
                                                  minHeight: 20,
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent: "flex-end",
                                                  position: "relative",
                                                  zIndex: 20,
                                                }}
                                              >
                                                {double}
                                              </div>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  ) : (
                                    <div
                                      data-radium="true"
                                      style={{
                                        flex: "1 1 0%",
                                        display: "flex",
                                        height: "100%",
                                      }}
                                    />
                                  )}
                                </div>

                                {/* first half */}
                                <div
                                  data-radium="true"
                                  style={{
                                    flex: "1 1 0%",
                                    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  {/* handicap */}
                                  <div
                                    data-radium="true"
                                    style={{
                                      flex: "1 1 0%",
                                      display: "flex",
                                      height: "100%",
                                    }}
                                  >
                                    <div
                                      data-radium="true"
                                      style={{
                                        flex: "3 1 0%",
                                        fontSize: 14,
                                        color: "rgba(0, 0, 0, 0.5)",
                                        display: "flex",
                                        flexDirection: "column",
                                        paddingLeft: 1,
                                        paddingRight: 1,
                                        paddingTop: 3,
                                      }}
                                    >
                                      <div
                                        data-radium="true"
                                        style={{
                                          fontSize: 14,
                                          color: "rgba(0, 0, 0, 0.5)",
                                          fontWeight: "bold",
                                          marginBottom: 3,
                                          flex: "2 1 0%",
                                          display: "flex",
                                          borderRadius: 3,
                                          alignItems: "center",
                                          maxHeight: 20,
                                        }}
                                      />
                                      <div
                                        data-radium="true"
                                        style={{
                                          fontSize: 14,
                                          color: "rgba(0, 0, 0, 0.5)",
                                          fontWeight: "bold",
                                          marginBottom: 3,
                                          flex: "2 1 0%",
                                          display: "flex",
                                          borderRadius: 3,
                                          alignItems: "center",
                                          maxHeight: 20,
                                        }}
                                      >
                                        1-1.5
                                        {/* kiểm tra quy luật BetRate */}
                                      </div>
                                    </div>
                                    <div
                                      data-radium="true"
                                      style={{
                                        flex: "3 1 0%",
                                        fontSize: 14,
                                        color: "rgba(0, 0, 0, 0.5)",
                                        display: "flex",
                                        flexDirection: "column",
                                        paddingLeft: 1,
                                        paddingRight: 1,
                                        paddingTop: 3,
                                      }}
                                    >
                                      {match.firstHalf.handicap?.[
                                        index
                                      ]?.winRates?.map((winRates) => (
                                        <div
                                          key={winRates}
                                          className="odd-item "
                                          id="odd-item-0HC477060100251807745HMM"
                                          data-radium="true"
                                          style={{
                                            position: "relative",
                                            marginBottom: 3,
                                            flex: "1 1 0%",
                                            display: "flex",
                                            alignItems: "center",
                                            borderRadius: 3,
                                            paddingLeft: 8,
                                            paddingRight: 8,
                                            maxHeight: 20,
                                          }}
                                        >
                                          <div
                                            data-radium="true"
                                            style={{
                                              textAlign: "right",
                                              flex: "1 1 0%",
                                              fontWeight: "bold",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              cursor: "pointer",
                                              minHeight: 20,
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "flex-end",
                                              position: "relative",
                                              zIndex: 20,
                                            }}
                                          >
                                            {winRates}
                                          </div>
                                        </div>
                                      ))}

                                      <div
                                        className="odd-item "
                                        id=""
                                        data-radium="true"
                                        style={{
                                          position: "relative",
                                          marginBottom: 0,
                                          flex: "1 1 0%",
                                          display: "flex",
                                          alignItems: "center",
                                          borderRadius: 3,
                                          paddingLeft: 8,
                                          paddingRight: 8,
                                          maxHeight: 20,
                                        }}
                                      />
                                    </div>
                                  </div>

                                  {/* overUnder */}
                                  <div
                                    data-radium="true"
                                    style={{
                                      flex: "1 1 0%",
                                      display: "flex",
                                      height: "100%",
                                    }}
                                  >
                                    <div
                                      data-radium="true"
                                      style={{
                                        flex: "3 1 0%",
                                        fontSize: 14,
                                        color: "rgba(0, 0, 0, 0.5)",
                                        display: "flex",
                                        flexDirection: "column",
                                        paddingLeft: 1,
                                        paddingRight: 1,
                                        paddingTop: 3,
                                      }}
                                    >
                                      <div
                                        data-radium="true"
                                        style={{
                                          fontSize: 14,
                                          color: "rgba(0, 0, 0, 0.5)",
                                          fontWeight: "bold",
                                          marginBottom: 3,
                                          flex: "2 1 0%",
                                          display: "flex",
                                          borderRadius: 3,
                                          alignItems: "center",
                                          maxHeight: 20,
                                        }}
                                      >
                                        3.5-4
                                      </div>
                                    </div>

                                    <div
                                      data-radium="true"
                                      style={{
                                        flex: "3 1 0%",
                                        fontSize: 14,
                                        color: "rgba(0, 0, 0, 0.5)",
                                        display: "flex",
                                        flexDirection: "column",
                                        paddingLeft: 1,
                                        paddingRight: 1,
                                        paddingTop: 3,
                                      }}
                                    >
                                      {match.firstHalf?.overUnder?.[
                                        index
                                      ]?.winRates?.map((winRates) => (
                                        <div
                                          key={winRates}
                                          className="odd-item "
                                          id="odd-item-0OU477060100260196352OMM"
                                          data-radium="true"
                                          style={{
                                            position: "relative",
                                            marginBottom: 3,
                                            flex: "1 1 0%",
                                            display: "flex",
                                            alignItems: "center",
                                            borderRadius: 3,
                                            paddingLeft: 8,
                                            paddingRight: 8,
                                            maxHeight: 20,
                                          }}
                                        >
                                          <div
                                            data-radium="true"
                                            style={{
                                              textAlign: "right",
                                              flex: "1 1 0%",
                                              fontWeight: "bold",
                                              color: "rgba(0, 0, 0, 0.8)",
                                              cursor: "pointer",
                                              minHeight: 20,
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "flex-end",
                                              position: "relative",
                                              zIndex: 20,
                                            }}
                                          >
                                            {winRates}
                                          </div>
                                        </div>
                                      ))}

                                      <div
                                        className="odd-item "
                                        id=""
                                        data-radium="true"
                                        style={{
                                          position: "relative",
                                          marginBottom: 0,
                                          flex: "1 1 0%",
                                          display: "flex",
                                          alignItems: "center",
                                          borderRadius: 3,
                                          paddingLeft: 8,
                                          paddingRight: 8,
                                          maxHeight: 20,
                                        }}
                                      />
                                    </div>
                                  </div>

                                  {/* double */}
                                  {match.firstHalf?.double?.length ? (
                                    <div
                                      data-radium="true"
                                      style={{
                                        flex: "1 1 0%",
                                        display: "flex",
                                        height: "100%",
                                      }}
                                    >
                                      <div
                                        data-radium="true"
                                        style={{
                                          flex: "3 1 0%",
                                          fontSize: 14,
                                          color: "rgba(0, 0, 0, 0.5)",
                                          display: "flex",
                                          flexDirection: "column",
                                          paddingLeft: 1,
                                          paddingRight: 1,
                                          paddingTop: 3,
                                        }}
                                      >
                                        <div
                                          data-radium="true"
                                          style={{
                                            fontSize: 14,
                                            color: "rgba(0, 0, 0, 0.5)",
                                            fontWeight: "bold",
                                            marginBottom: 3,
                                            flex: "2 1 0%",
                                            display: "flex",
                                            borderRadius: 3,
                                            alignItems: "center",
                                            maxHeight: 20,
                                          }}
                                        />
                                      </div>
                                      <div
                                        data-radium="true"
                                        style={{
                                          flex: "3 1 0%",
                                          fontSize: 14,
                                          color: "rgba(0, 0, 0, 0.5)",
                                          display: "flex",
                                          flexDirection: "column",
                                          paddingLeft: 1,
                                          paddingRight: 1,
                                          paddingTop: 3,
                                        }}
                                      >
                                        {match.firstHalf?.double?.map(
                                          (double) => (
                                            <div
                                              key={double}
                                              className="odd-item "
                                              id="odd-item-0ML485881149563170816H"
                                              data-radium="true"
                                              style={{
                                                position: "relative",
                                                marginBottom: 3,
                                                flex: "1 1 0%",
                                                display: "flex",
                                                alignItems: "center",
                                                borderRadius: 3,
                                                paddingLeft: 8,
                                                paddingRight: 8,
                                                maxHeight: 20,
                                              }}
                                            >
                                              <div
                                                data-radium="true"
                                                style={{
                                                  textAlign: "right",
                                                  flex: "1 1 0%",
                                                  fontWeight: "bold",
                                                  color: "rgba(0, 0, 0, 0.8)",
                                                  cursor: "pointer",
                                                  minHeight: 20,
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent: "flex-end",
                                                  position: "relative",
                                                  zIndex: 20,
                                                }}
                                              >
                                                {double}
                                              </div>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  ) : (
                                    <div
                                      data-radium="true"
                                      style={{
                                        flex: "1 1 0%",
                                        display: "flex",
                                        height: "100%",
                                      }}
                                    />
                                  )}
                                </div>

                                <div
                                  data-radium="true"
                                  style={{
                                    width: 100,
                                    display: "grid",
                                    placeItems: "center",
                                  }}
                                />
                              </match-component>
                            ))}

                            <div
                              className="merge-column"
                              data-radium="true"
                              style={{
                                position: "absolute",
                                top: 0,
                                height: "calc(100% - 1px)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "rgb(239, 224, 213)",
                                left: 0,
                                width: 70,
                                fontSize: 15,
                                fontWeight: "bold",
                                color: "rgb(247, 88, 49)",
                                textAlign: "center",
                                flexDirection: "column",
                              }}
                            >
                              {match.teamAScore} - {match.teamBScore}
                              <div
                                data-radium="true"
                                style={{
                                  fontSize: 13,
                                  paddingTop: 3,
                                  opacity: "0.9",
                                }}
                              >
                                1H 29h
                              </div>
                            </div>
                            <div
                              className="merge-column"
                              data-radium="true"
                              style={{
                                position: "absolute",
                                top: 0,
                                height: "calc(100% - 1px)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "rgb(239, 224, 213)",
                                right: 0,
                                width: 100,
                              }}
                            >
                              <div style={{}} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </league-component>
                  ))}
                </div>
              </div>
            </handicap-ou-component>
          </soccer-component>
        </sport-book-component>
      </sport-book-container>
    </div>
  );
};

export default ContentHome;
