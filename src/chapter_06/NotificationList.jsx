import React from "react";
import Notification from "./Notification";

// 미리 예약된 알림 메시지 배열
const reservedNotifications = [
    {
        message: "오늘은 휴무입니다."
    },
    {
        message: "내일은 휴무입니다."
    },
    {
        message: "모레는 휴무입니다."
    },
];

var timer; // 타이머를 저장할 변수

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        // state 초기화, notifications 배열을 빈 배열로 설정
        this.state = {
            notifications: [],
        };
    }

    // 컴포넌트가 마운트된 후 실행되는 메서드
    componentDidMount() {
        const {notifications} = this.state;
        // 1초마다 실행되는 타이머 설정
        timer = setInterval(() => {
            // notifications 배열의 길이가 reservedNotifications 배열의 길이보다 작을 때
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length; // 현재 알림의 인덱스
                notifications.push(reservedNotifications[index]); // 새로운 알림 추가
                this.setState({notifications: notifications}); // state 업데이트
            } else {
                clearInterval(timer); // 모든 알림이 추가되면 타이머 중지
            }
        }, 1000);
    }

    // 컴포넌트가 언마운트되기 전에 실행되는 메서드
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer); // 타이머가 설정되어 있으면 타이머 중지
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;