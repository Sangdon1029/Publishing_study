# Publishing_study

[첫번째 페이지 바로 보기](https://sangdon1029.github.io/Publishing_study/%EC%B2%AB%EB%B2%88%EC%A7%B8%20%EA%B3%BC%EC%A0%9C/Google_Randing-change_detail/google.html)
<br>
[두번째 페이지 바로 보기](https://sangdon1029.github.io/Publishing_study/%EC%B2%AB%EB%B2%88%EC%A7%B8%20%EA%B3%BC%EC%A0%9C/Google_Randing/index.html)
<br>
[navermain](https://sangdon1029.github.io/Publishing_study/naver_agree.html) 마크업만 진행하였습니다
<br>
[naverhome](https://sangdon1029.github.io/Publishing_study/naver_home.html) 마크업만 진행하였습니다
<br>
[naverinfo](https://sangdon1029.github.io/Publishing_study/naver_info.html) 마크업만 진행하였습니다

[wadiz홈페이지](https://sangdon1029.github.io/Publishing_study/wadiz.html)
<br>
[버튼 만들기](https://sangdon1029.github.io/Publishing_study/checkbox.html)
<br>
[modal.html](https://sangdon1029.github.io/Publishing_study/%EB%84%A4%EB%B2%88%EC%A7%B8%EA%B3%BC%EC%A0%9C/modal.html)

[einsmedia 클론](https://sangdon1029.github.io/Publishing_study/아인스미디어/einsmedia.html)
<hr>


## Google_rending-page



- 화면 전체 페이지입니다.


![screen](https://user-images.githubusercontent.com/93380732/147726999-ef2b46b9-0a00-432d-af22-4189d050254b.jpg)



- 오류 사항입니다.
<img width="130" alt="error" src="https://user-images.githubusercontent.com/93380732/147726909-9584c334-df28-4927-9447-2a56ada7dfd7.png">


<br>
<br>
<br>
<br>


## 생각해보기

- 구글 홈페이지의 하단 부분은 사용자가 화면을 줄여도 배경 테마 지정을 쉽게하기 위해서 position fixed로 구성한 것 같았습니다.

- 또한 화면 크기를 줄여도 주된 기능은 검색창이므로 항상 화면 중앙에 오도록 배치해야 된다고 생각했습니다.

- 검색창 하단 부분에 위젯을 구현할 방법을 찾아 봐야겠습니다.

## 좋은 코드

### reset.css는 위로 올라가야 됩니다
> - css파일을 적용시킬때 아래쪽으로 내려가면서 인식을 하기 때문에 reset은 최상단에 위치시켜야 됩니다.

<br>


### label을 적용시키는 두가지 방법 (웹 접근성 지침서)
> 1. for를 사용해서 연결시키는 방법 ( 명시적인 label )
> 2. label태그 안쪽에 연결시킬 태그를 위치시키는 방법 ( 암묵적인 label )

<br>


### Figure태그에 대해서 ... 
> -  figure태그는 여러개의 그림,그래프 등을 묶는 용도로 사용합니다.
> -  또한, figcaption태그는 figure태그안에 상단 또는 하단에 '만' 위치시켜야 됩니다.

<br>

### main안에 header태그가 올 수 없습니다.
> - 반대로 header태그 안에는 main태그가 올 수 없습니다.
> - section태그안에는 header, main, footer를 사용 할 수 있습니다.

### **ul의 하위태그로 li태그 '만' 사용 할 수 있습니다.**
### li 태그 내부에는 어떠한 태그도 다 사용 가능합니다

<br>

### block element내부에 block element를 사용 할 수 있습니다. 다만!
- <중요> h1~h6 태그 내부에는 어떠한 block element도 올 수 없습니다.
- <중요> h1(heading tag)와 마찬가지로 dt 안에도 block element가 들어 올 수 없습니다.
- dt 하위에는 항상 dd 태그가 들어와야 합니다.
>   :: dl 태그를 사전이라고 생각하시면 이해하기 쉽습니다.
>                   HTML이란?     <br>
>                       - ~~~~~~ <br>
>                       - ~~~~~~

<br>

### a 태그안에 button 태그...
> - a 태그의 기능을 생각해보면 어떠한 문서와 연결 시켜주는 역활입니다. 그러므로 button태그 열결시키주는 기능으로 a태그 안에 있게 된다면 기능의 '중복'이므로 button을 생략 해주어야 합니다. 

> 결론 : button태그 안에 a태그를 사용하면 안되며,
  a태그 안에 button태그를 사용하면 안됩니다.

<br>

### 모든 인라인 요소는 모든 블럭요소안에 포함 될 수 있다  (o)
예시로 `<h1> <span></sapn></h1>`

반대로
### 모든 인라인요소 안에 어떠한 블럭요소도 포함 될 수 없다. (중립)
> - html4 이전에는 어떠한 블럭요소도 들어올 수 없었습니다.
> - 하지만 html5에서 a태그 만 사용이 가능하도록 변경이 되었습니다. 

<br>


### DTD 선언부
> - 우리가 항상 사용하는 <!DOCTYPE>의 경우 
이전에는 더욱 길고 많은 정보를 적어 주어야 했습니다.
> - 그래서 지금 우리가 사용하는 문장은 html5 이다 라고 '버전'을 명시 해주는 것입니다.

> - 위에서 설명한 것과 비슷하게 `<br />`태그 역시 HTML의 버전 차이로 생겨난 태그입니다. (empty elements)

