<div class="c-classic-content @if (!isset($col)) {{ 'col' }} @endif">
  @if (!isset($col))
      @include('elements/title', ['data' => $data['titles']])
      @if ($data['text'])
          <div class="c-classic-content__text">{!! $data['text'] !!}</div>
      @endif
      @if ($data['link'])
          @include('elements/button', ['data' => $data['link']])
      @endif
  @else
      <div class="container-fluid">
          <div class="row">
              <div class="col-md-9 offset-md-2">
                  @include('elements/title', ['data' => $data['titles']])
              </div>
              @if ($data['link'] || $data['text'])
                  <div class="col-md-8 offset-md-3">
                      @if ($data['text'])
                          <div class="c-classic-content__text">{!! $data['text'] !!}</div>
                      @endif
                      @if ($data['link'])
                          @include('elements/button', ['data' => $data['link']])
                      @endif
                  </div>
              @endif
          </div>
      </div>
  @endif
</div>
