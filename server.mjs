curl \
	-H "Authorization: Bearer 319cb5c30fb17de7ff3c5f7d68888afb8ee5fac818178fe937f40c019418137d" \
	-H "Content-Type: application/json" -d '{"ttl": 86400}' \
	https://rtc.live.cloudflare.com/v1/turn/keys/f2f8c6d8f31d7b0a1adf2bf76cd5b45b/credentials/generate-ice-servers

RTCPeerConnection json front-end application:
{
	"iceServers": [
    {
      "urls": [
        "stun:stun.cloudflare.com:3478",
        "turn:turn.cloudflare.com:3478?transport=udp",
        "turn:turn.cloudflare.com:3478?transport=tcp",
        "turns:turn.cloudflare.com:5349?transport=tcp"
      ],
      "username": "xxxx",
      "credential": "yyyy",
    }
  ]
}
