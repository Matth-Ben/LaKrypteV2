@if ($data)
  <section class="c-latest-posts">
    <div class="container-fluid">
      <div class="row">
        <div class="col-24">
          <div class="c-latest-posts__title">
            <h2 class="e-title">{{ __('Découvrez nos autres actualités', 'digitalcover') }}</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-20 offset-md-2">
          <div class="news__cards">
            @foreach ($data as $post)
              <div class="news__card">
                @include('components/card-post', ['data' => $post])
              </div>
            @endforeach
          </div>
        </div>
      </div>
    </div>
  </section>
@endif
