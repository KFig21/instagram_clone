import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import * as ROUTES from "../constants/routes";
import useUser from "../hooks/use-user";
import newPostIcon from "../assets/newPost.png";
import { useHistory } from "react-router-dom";
// import logo from "../assets/petstagram.png";

export default function Header() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  const { userInfo } = useUser();
  const history = useHistory();

  return (
    <header className="h-16 bg-white border-b border-gray-primary sticky top-0 z-50">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full pr-5 pl-5">
          <div className="text-gray-700 text-center flex  items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASHBOARD} aria-label="instagram header">
                {/* <img src={logo} alt="instagram header" className="mt-2 w-28" /> */}
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1250.000000 350.000000"
                  preserveAspectRatio="xMidYMid meet"
                  className="mt-2 w-32"
                >
                  <g
                    transform="translate(0.000000,350.000000) scale(0.100000,-0.100000)"
                    fill="#231F20"
                    stroke="none"
                  >
                    <path
                      d="M774 3359 c-303 -50 -550 -278 -660 -606 -35 -106 -45 -299 -19 -389
25 -89 62 -149 130 -213 71 -65 143 -104 189 -99 46 4 46 41 2 120 -50 90 -66
163 -67 299 0 139 13 218 53 320 36 93 85 158 163 221 61 49 80 57 86 36 2 -7
1 -413 -2 -903 -6 -987 -3 -941 -74 -1090 -19 -39 -35 -86 -35 -104 0 -30 1
-31 45 -31 65 0 130 37 202 114 132 141 172 292 173 646 l0 195 93 17 c183 34
373 111 503 204 129 91 231 240 269 389 20 78 20 269 -1 355 -61 261 -288 454
-604 514 -90 17 -356 20 -446 5z m431 -245 c155 -40 273 -167 314 -338 15 -63
15 -205 0 -276 -29 -138 -123 -266 -238 -324 -110 -56 -275 -83 -302 -49 -11
13 -15 109 -17 510 l-3 493 94 0 c52 0 119 -7 152 -16z"
                    />
                    <path
                      d="M2933 3313 c-15 -23 -19 -56 -21 -226 l-4 -199 -163 7 -163 7 -18
-28 c-22 -33 -32 -151 -15 -183 11 -20 19 -21 178 -21 l166 0 -7 -392 c-8
-435 -1 -390 -88 -536 -119 -198 -250 -311 -397 -343 -130 -28 -237 73 -277
260 -18 88 -18 101 5 101 39 0 208 62 278 102 39 22 98 67 131 100 101 101
142 199 142 343 0 98 -18 141 -87 212 -65 67 -143 93 -277 93 -152 0 -253 -46
-365 -165 -141 -151 -211 -361 -211 -632 0 -165 18 -261 69 -368 65 -136 157
-220 292 -265 55 -19 81 -21 179 -18 126 4 182 21 297 89 77 46 207 177 270
273 l52 78 11 -43 c46 -184 112 -304 194 -354 42 -26 61 -30 131 -33 73 -4 88
-1 136 23 73 37 188 156 271 280 66 100 278 477 278 495 0 21 19 6 125 -98
134 -133 166 -186 173 -287 4 -58 0 -81 -16 -118 -48 -109 -153 -114 -291 -13
-75 55 -94 56 -145 5 -52 -53 -84 -128 -70 -167 27 -76 255 -143 436 -128 244
20 417 153 568 438 41 78 50 88 50 63 1 -64 41 -221 74 -291 38 -81 100 -149
161 -179 61 -29 171 -33 223 -6 87 44 173 146 234 276 l32 69 16 -50 c45 -131
123 -234 215 -282 47 -25 58 -27 175 -26 105 0 134 4 183 23 70 27 162 113
195 181 14 29 22 38 22 24 0 -34 49 -121 88 -155 87 -76 216 -102 308 -60 58
27 121 86 156 148 17 29 31 53 33 53 2 0 17 -23 35 -50 44 -69 111 -125 179
-151 48 -18 70 -20 161 -16 141 7 202 30 281 107 l59 58 0 -47 -1 -46 -176
-160 c-315 -286 -417 -424 -430 -584 -14 -171 74 -298 246 -351 132 -41 277
-17 386 65 100 75 144 141 188 281 42 134 57 267 57 518 l0 227 91 111 c111
136 169 222 240 353 114 212 219 463 219 528 l0 27 110 0 c61 0 110 -4 110 -8
0 -5 -9 -51 -20 -103 -43 -209 -53 -458 -25 -605 60 -317 330 -470 541 -309
18 14 50 51 72 84 l40 60 31 -50 c74 -113 167 -159 325 -159 175 0 298 56 365
166 14 24 28 44 31 44 4 0 11 -15 18 -33 19 -54 78 -113 144 -146 50 -25 73
-31 128 -31 113 0 189 51 251 170 l23 45 11 -85 c10 -81 11 -85 45 -104 27
-16 57 -22 137 -24 97 -4 103 -3 126 20 23 23 24 32 31 194 9 221 21 315 56
449 48 186 134 392 166 402 8 3 14 -39 18 -134 14 -289 44 -560 72 -664 18
-63 60 -121 106 -145 40 -20 141 -21 171 -1 21 13 24 27 35 158 13 155 46 330
87 474 28 95 111 313 126 330 5 5 9 -97 9 -248 0 -469 37 -639 166 -756 118
-108 291 -110 384 -5 65 75 119 228 123 352 2 56 -1 66 -22 83 -41 33 -61 9
-93 -110 -30 -109 -55 -166 -84 -192 -79 -69 -157 10 -191 192 -14 77 -17 361
-9 826 1 66 -21 98 -101 140 -125 67 -221 73 -261 15 -56 -80 -185 -484 -223
-697 l-13 -70 -7 41 c-10 57 -29 386 -29 509 0 87 -3 108 -23 145 -42 79 -192
139 -269 107 -31 -13 -43 -28 -77 -99 -22 -46 -70 -173 -108 -283 l-68 -200
-3 259 c-2 221 -5 262 -18 277 -19 21 -133 49 -198 49 -33 0 -48 -5 -54 -17
-6 -10 -13 -216 -17 -458 -3 -242 -11 -458 -16 -480 -38 -159 -133 -295 -206
-295 -34 0 -80 46 -98 98 -30 87 -39 316 -28 697 7 224 7 357 1 368 -16 31
-96 60 -179 65 -71 4 -77 3 -93 -19 -9 -13 -16 -37 -16 -53 l0 -29 -51 51
c-78 78 -124 97 -239 97 -101 0 -139 -13 -218 -73 -81 -62 -175 -233 -218
-397 -24 -91 -27 -118 -28 -300 0 -110 1 -232 4 -271 5 -63 2 -76 -25 -129
-34 -67 -65 -93 -118 -102 -35 -5 -41 -2 -80 38 -50 52 -73 118 -88 246 -17
142 1 316 56 562 39 171 31 236 -34 274 -50 29 -93 30 -237 3 -77 -15 -151
-29 -166 -31 l-28 -4 2 68 c3 108 -41 156 -141 155 -110 -2 -177 -66 -201
-194 -12 -62 4 -120 48 -170 l35 -42 -13 -51 c-19 -77 -77 -230 -126 -332 -44
-94 -149 -272 -184 -315 l-21 -25 3 495 3 495 -49 24 c-32 16 -72 26 -121 29
-64 4 -75 2 -94 -17 -13 -13 -21 -34 -21 -56 l0 -34 -45 48 c-24 26 -68 61
-97 77 -48 26 -62 29 -148 29 -79 0 -103 -4 -142 -23 -133 -66 -240 -229 -298
-455 -32 -126 -46 -328 -32 -461 10 -94 10 -120 -2 -153 -25 -71 -54 -119 -92
-153 -32 -27 -42 -31 -73 -26 -44 7 -85 49 -101 103 -28 100 -33 205 -27 625
l6 427 -26 21 c-35 27 -116 50 -178 50 -63 0 -85 -19 -85 -74 l0 -38 -44 49
c-24 27 -68 62 -98 78 -48 27 -61 30 -148 30 -112 0 -161 -18 -236 -87 -142
-130 -222 -346 -243 -660 -6 -87 -17 -153 -30 -191 -65 -187 -190 -319 -269
-284 -29 13 -68 95 -83 177 -20 106 -6 1057 16 1079 4 3 92 8 197 11 l191 5
20 27 c26 35 35 129 15 146 -9 7 -90 16 -214 23 -109 6 -202 14 -205 17 -3 4
-2 84 3 177 4 94 6 179 3 191 -6 26 -76 57 -185 80 -72 16 -81 16 -103 1 -31
-20 -35 -42 -43 -260 l-7 -178 -156 2 c-148 1 -156 0 -173 -21 -35 -43 -51
-163 -26 -188 8 -8 47 -12 108 -12 52 0 125 -3 163 -7 l67 -6 0 -352 c0 -331
-1 -357 -21 -421 -36 -117 -113 -248 -187 -318 l-30 -28 5 59 c6 67 -15 155
-50 213 -39 64 -110 131 -257 243 -80 61 -149 114 -154 118 -5 5 8 34 33 68
57 82 103 184 109 241 9 94 -43 140 -156 140 -224 0 -389 -293 -263 -467 l27
-37 -42 -77 c-24 -42 -75 -139 -114 -215 -141 -272 -233 -384 -317 -384 -43 0
-68 26 -88 92 -19 61 -20 194 -9 766 l7 362 198 0 199 0 20 41 c15 29 20 55
18 92 -3 50 -4 51 -38 58 -19 4 -115 11 -213 15 l-178 7 7 192 7 193 -24 15
c-43 28 -176 67 -228 67 -44 0 -53 -4 -68 -27z m-480 -881 c15 -15 29 -42 33
-59 24 -119 -202 -401 -351 -439 l-28 -7 5 89 c11 174 113 372 223 432 38 21
89 14 118 -16z m3626 -57 c105 -54 155 -251 132 -523 -14 -159 -31 -225 -78
-310 -50 -89 -84 -126 -145 -156 -65 -32 -89 -33 -126 -1 -75 63 -117 247
-109 475 10 277 74 462 179 513 41 21 110 22 147 2z m1371 -7 c79 -54 116
-204 107 -438 -7 -187 -28 -284 -80 -379 -53 -97 -86 -134 -149 -165 -68 -34
-91 -33 -132 8 -79 80 -120 304 -97 532 24 242 91 394 196 448 45 24 115 20
155 -6z m2337 3 c39 -24 79 -92 101 -168 22 -76 23 -386 3 -488 -39 -197 -112
-318 -209 -345 -70 -19 -97 -13 -135 29 -74 82 -103 227 -94 475 10 284 60
427 172 497 40 25 120 25 162 0z m-2200 -1538 c-9 -286 -31 -385 -102 -462
-47 -51 -91 -71 -152 -71 -53 0 -88 18 -124 63 -50 65 2 231 121 389 50 66
246 278 258 278 2 0 2 -89 -1 -197z"
                    />
                  </g>
                </svg>
              </Link>
            </h1>
          </div>
          <div className="text-gray-700 text-center flex flex-none items-center align-items">
            {user ? (
              <>
                <Link
                  to={{
                    pathname: `${ROUTES.UPLOAD_POST}`,
                    state: { type: "post" },
                  }}
                  aria-label="upload post"
                >
                  {/* <img
                    src={newPostIcon}
                    alt="add post"
                    className="w-8 mr-4 lg:mr-6 cursor-pointer"
                  /> */}
                  <svg
                    className="w-8 mr-4 lg:mr-6 cursor-pointer"
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="562.000000pt"
                    height="533.000000pt"
                    viewBox="0 0 562.000000 533.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,533.000000) scale(0.100000,-0.100000)"
                      fill="#262626"
                      stroke="none"
                    >
                      <path
                        d="M2002 5295 c-86 -22 -157 -47 -200 -70 -288 -159 -573 -469 -733
-798 -47 -98 -66 -153 -100 -294 l-42 -173 -51 0 c-53 0 -253 -47 -296 -70
-58 -30 -199 -143 -244 -196 -143 -165 -215 -313 -277 -568 -77 -319 -78 -477
-4 -769 54 -218 163 -406 329 -572 96 -96 268 -219 350 -250 34 -13 45 -22 42
-34 -37 -121 -50 -205 -50 -331 0 -123 3 -147 37 -275 43 -166 90 -266 182
-388 114 -150 315 -307 482 -377 84 -35 295 -92 432 -115 107 -19 320 -19 437
0 50 8 162 34 250 57 139 37 173 42 264 42 93 0 125 -5 280 -46 227 -59 321
-72 506 -66 119 4 178 12 293 37 152 35 283 77 366 118 157 79 352 250 453
396 74 107 108 186 150 344 32 125 35 151 36 273 0 113 -4 152 -26 240 -18 69
-23 106 -16 109 121 43 322 191 433 317 158 181 227 312 287 546 41 161 42
165 42 338 0 166 -2 183 -37 336 -73 316 -124 428 -285 627 -58 72 -190 178
-258 208 -59 27 -241 69 -295 69 l-47 0 -21 98 c-42 185 -62 248 -117 362
-102 213 -200 348 -388 535 -206 204 -350 292 -566 345 -76 18 -151 30 -192
30 -100 0 -272 -43 -349 -88 -61 -36 -199 -161 -233 -212 l-17 -25 -21 30
c-40 57 -164 170 -227 207 -80 46 -249 88 -354 88 -48 -1 -116 -12 -205 -35z
m334 -406 c131 -63 225 -255 269 -546 25 -171 39 -482 26 -605 -12 -112 -45
-244 -83 -326 -37 -83 -126 -208 -186 -264 -355 -328 -847 -116 -992 427 -26
100 -37 295 -21 386 49 281 268 623 521 811 182 135 344 176 466 117z m1153
16 c237 -56 524 -330 681 -650 90 -184 105 -248 105 -435 0 -130 -4 -169 -23
-239 -77 -285 -243 -488 -460 -563 -93 -32 -240 -31 -327 2 -261 100 -439 370
-476 718 -13 123 1 434 26 605 56 372 187 569 385 576 14 0 54 -6 89 -14z
m-2464 -1395 c153 -71 320 -273 461 -555 72 -146 94 -226 94 -353 0 -198 -69
-377 -193 -504 -94 -95 -196 -138 -327 -138 -277 1 -525 204 -610 500 -28 98
-37 296 -20 422 37 277 165 531 308 616 99 57 182 61 287 12z m3821 6 c130
-60 240 -223 308 -457 36 -127 50 -251 43 -397 -7 -155 -23 -216 -89 -352 -64
-130 -137 -207 -255 -268 -107 -55 -187 -75 -308 -76 -159 0 -250 37 -332 136
-59 73 -102 150 -137 245 -30 84 -31 95 -31 243 0 175 6 202 81 352 166 333
363 551 537 594 64 16 116 10 183 -20z m-1896 -596 c264 -42 503 -206 635
-434 28 -47 72 -124 99 -171 74 -127 173 -235 316 -344 251 -192 371 -346 446
-571 25 -77 28 -99 29 -225 0 -129 -2 -146 -28 -220 -90 -255 -314 -440 -617
-509 -238 -55 -483 -36 -790 61 -76 23 -101 26 -230 26 -129 0 -154 -3 -230
-26 -339 -107 -613 -119 -865 -40 -270 85 -461 256 -541 484 -38 107 -44 270
-15 392 51 213 171 392 383 568 188 157 360 356 474 549 147 247 368 407 634
456 83 15 216 17 300 4z"
                      />
                      <path
                        d="M2726 2319 c-20 -17 -40 -47 -46 -67 -5 -20 -10 -128 -10 -239 l0
-203 -216 0 c-226 0 -237 -2 -286 -48 -24 -22 -28 -33 -28 -84 0 -38 6 -68 16
-84 33 -50 55 -54 294 -54 l220 0 0 -207 c0 -115 5 -225 10 -245 6 -20 24 -48
41 -62 41 -35 132 -37 174 -4 50 39 55 68 55 298 l0 210 198 0 c212 0 255 7
302 46 28 24 30 30 30 92 0 75 -13 99 -67 126 -26 13 -69 16 -248 16 l-215 0
0 210 c0 155 -4 219 -14 243 -37 89 -142 116 -210 56z"
                      />
                    </g>
                  </svg>
                </Link>
                <Link to={ROUTES.DASHBOARD} aria-label="timeline">
                  <svg
                    className="w-8 mr-4 lg:mr-6 text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                    <title>Timeline</title>
                  </svg>
                </Link>
                <button
                  type="button"
                  title="Sign-out"
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(e) => {
                    if (e.key === "enter") {
                      history.push("/login");
                      firebase.auth().signOut();
                    }
                  }}
                >
                  <svg
                    className="w-8 mr-4 lg:mr-6 text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
                <div className="flex items-center cursor-pointer">
                  <Link to={`/p/${userInfo.username}`}>
                    <img
                      title={`${userInfo.username}`}
                      className="rounded-full h-8 w-8 flex object-cover"
                      src={`${userInfo.avatar}`}
                      alt={`${userInfo.username} profile`}
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="bg-blue-primary font-bold text-sm rounded text-white w-20 h-8"
                  >
                    Login
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button
                    type="button"
                    className="bg-white font-bold text-sm rounded text-blue-primary w-20 h-8"
                  >
                    Sign-up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
