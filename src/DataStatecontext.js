import React, { useReducer, createContext, useContext, useState, Children } from "react";

//useReducer 상태값에 따라 컴포넌트 분할
//createContext 전역으로 사용할 데이터 설정
// useContext createContext으로 설정된 데이터 사용하기 함수

const Data = [
    [
        {
            id: 1,
            src: process.env.PUBLIC_URL + '/images/mainarea/02_03.png',
            ttl: '무빙 온 아시아',
            day: '2025-04-15 - 2025-06-29'
        },
        {
            id: 2,
            src: process.env.PUBLIC_URL + '/images/mainarea/01.png',
            ttl: '디지털 서브컬쳐',
            day: '2025-04-15 - 2025-06-29'
        },
        {
            id: 3,
            src: process.env.PUBLIC_URL + '/images/mainarea/01.png',
            ttl: '디지털 서브컬쳐',
            day: '2025-04-15 - 2025-06-29'
        }
    ],
    [
        {
            id: 4,
            category: '시민교육',
            ttl2: '젊은 시각 새로운 시선 2025',
            day2: '2025-04-15 - 2025-06-29',
            src: process.env.PUBLIC_URL + '/images/mainarea/04_06.png'
        },
        {
            id: 5,
            category: '시민교육',
            ttl2: '2025 상반기 부산시립미술관 <br />리노베이션<br />연계 창의 교육프로그램',
            day2: '2025-05-12 - 2025-05-30',
            src: process.env.PUBLIC_URL + '/images/mainarea/05.png'
        },
        {
            id: 6,
            category: '시민교육',
            ttl2: '젊은 시각 새로운 시선 2025',
            day2: '2025-04-15 - 2025-06-29',
            src: process.env.PUBLIC_URL + '/images/mainarea/04_06.png'
        }
    ],
    [
        {
            id: 7,
            src: process.env.PUBLIC_URL + '/images/mainarea/07.png',
            author: '우신출',
            ttl3: '제목없음',
            day3: '1934',
        },
        {
            id: 8,
            src: process.env.PUBLIC_URL + '/images/mainarea/08.png',
            author: '박춘제',
            ttl3: '제목미상'
        },
        {
            id: 9,
            src: process.env.PUBLIC_URL + '/images/mainarea/09.png',
            author: '추연근',
            ttl3: '승화',
            day3: '1979'
        },
        {
            id: 10,
            src: process.env.PUBLIC_URL + '/images/mainarea/10.png',
            author: '우신출',
            ttl3: '자화상-얼굴',
            day3: '1933. 12'
        }
    ],
    [
        {
            id: 11,
            src: process.env.PUBLIC_URL + '/images/mainarea/11.png',
            ttl4: '부산시립미술관 리노베이션'
        },
        {
            id: 12,
            src: process.env.PUBLIC_URL + '/images/mainarea/12.png',
            ttl4: '젊은 시각 새로운 시선 20...'
        },
        {
            id: 13,
            src: process.env.PUBLIC_URL + '/images/mainarea/13.png',
            ttl4: '젊은 시각 새로운 시선 20...'
        },
        {
            id: 14,
            src: process.env.PUBLIC_URL + '/images/mainarea/14.png',
            ttl4: '젊은 시각 새로운 시선 20...'
        }
    ]
];
function proReducer(Data, action) { }

const DisplayStateContext = createContext();//전역으로 사용할 데이터 설정 컴포넌트

export function Provider({ children }) {
    // 기능분할
    const [state, dispatch] = useReducer(proReducer, Data);
    return (
        <DisplayStateContext.Provider value={state}>
            {children}
        </DisplayStateContext.Provider>
    )
}

//전역으로 사용할 데이터 사용하기 컴포넌트(useContext)
export function UsedataState() {
    const context = useContext(DisplayStateContext)
    if (!context) {
        throw new Error()
    }
    return context;
}

// export default Provider;