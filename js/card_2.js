let windowWidth, windowHeight;

window.onload = function () {
	const _cards = document.querySelectorAll('.cardItem');
	const _btn = document.querySelectorAll('.btn-nav');
	let pageNum = 0;

	TweenMax.from('.tit', 1, {
		top: -50,
		autoAlpha: 0,
		ease: Power3.easeOut,
	});

	_btn.forEach(function (item, i) {
		TweenMax.from(item, 0.4, {
			top: 100,
			autoAlpha: 0,
			ease: Power3.easeInOut,
			delay: i * 0.1 + 1,
		});
	});

	for (let i = 0; i < _btn.length; i++) {
		(function (item) {
			_btn[item].onclick = function () {
				pageNum = item;
				cardSetting();
			};
		})(i);
	}

	window.addEventListener('resize', function () {
		resize();
	});

	function resize() {
		windowHeight = window.innerHeight;
		windowWidth = window.innerWidth;
		cardSetting();
	}

	//초기화, 리셋 버튼 클릭시 실행
	function cardSetting() {
		for (let i = 0; i < _btn.length; i++) {
			_btn[i].classList.remove('active');
		}
		_btn[pageNum].classList.add('active');

		if (pageNum == 0) {
			//가운데 정렬
			_cards.forEach(function (item, i) {
				TweenMax.to(item, 1, {
					top: windowHeight / 2 - i * 50,
					left: windowWidth / 2 + i * 60 - 200,
					rotationX: 0,
					rotationY: 0,
					rotationZ: 0,
					ease: Power4.easeInOut,
					delay: i * 0.15,
				});
			});
		} else if (pageNum == 1) {
			//랜덤
			_cards.forEach(function (item, i) {
				TweenMax.to(item, 1, {
					top: Math.random() * (windowHeight - 300) + 100,
					left: Math.random() * (windowWidth - 300) + 100,
					rotationX: 'random(-60,60)', //Math.random()*30
					rotationY: 'random(-60,60)',
					rotationZ: 'random(-50,50)',
					//scale : Math.random() * .6 + .6,
					ease: Power4.easeInOut,
					delay: 'random(0,.5)',
				});
			});
		} else if (pageNum == 2) {
			_cards.forEach(function (item, i) {
				TweenMax.to(item, 1, {
					top: windowHeight / 2 + i * 30 - 100,
					left: windowWidth / 2 - i * 80,
					rotationX: 0,
					rotationY: -10 * i,
					rotationZ: 20 * i,
					ease: Power4.easeInOut,
					delay: i * 0.15,
				});
			});
		} else if (pageNum == 3) {
			_cards.forEach(function (item, i) {
				TweenMax.to(item, 1, {
					top: Math.random() * (windowHeight - 300) + 100,
					left: windowWidth / 2 - i * 80,
					rotationX: -10 * i,
					rotationY: Math.random() * 5 * i,
					rotationZ: 2 * i,
					ease: Power4.easeInOut,
					delay: i * 0.15,
				});
			});
		}
	}

	resize();
};
