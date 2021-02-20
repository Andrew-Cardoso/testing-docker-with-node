import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
// app.use(express.json());

app.get('/', (request, response) =>
	response.send(`
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Simple node/docker</title>

				<style>
					* {
						margin: 0;
						padding: 0;
						box-sizing: border-box;
					}
					html {
						background: #1d1d1d;
						color: #ccf;
						font-family: monospace;
					}

					div {
						position: relative;
						width: 100vw;
						height: 100vh;
						display: grid;
						align-items: center;
						justify-content: center;
						text-align: center;
					}

					img {
						align-self: baseline;
						justify-self: center;
						filter: drop-shadow(2px 4px 6px black) hue-rotate(220deg);
						animation: alternate infinite 500ms whale;
					}

					@keyframes whale {
						0% {
							transform: skewX(10deg);
						}

						100% {
							transform: skewY(10deg);
						}
					}
				</style>
			</head>
		<body>
			<div>
				<h2>Hello <span style="text-decoration: line-through;">world</span> Docker</h2>
				<p>
					Yay! Node and Docker together works!
					<span style="display: block; font-size: 14px; color: #6666;">
						At least in my dev environment
					</span>
				</p>
				<img alt="congratz" src="https://cdn.iconscout.com/icon/free/png-256/docker-226091.png">
			</div>	
		</body>
		</html>
	`)
);

app.listen(3030);
