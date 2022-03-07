<div class="h-main">
  <div class="container-fluid">
    <div class="row">
      <div class="col-24 offset-0 h-main__w">
        <div class="h-main__topNav">
          <div class="h-main__burger">
            <div class="burger-line"></div>
            <div class='cross-line'>
              <div class="burger-line"></div>
              <div class="burger-line cross"></div>
            </div>
            <div class="burger-line"></div>
          </div>
        </div>
        <div class="h-main__mainNav">
          @foreach ($data as $item)
            <a class="h-main__item" href='{{$item['url']}}' @isset($item['target']) targer='_blank' rel='noopener' @endisset>
              <span class="h-main__item-content">
                <span class="h-main__item-title" data-text="{{$item['title']}}">{{$item['title']}}</span>
              </span>
            </a>
          @endforeach
        </div>
      </div>
    </div>
  </div>
</div>
