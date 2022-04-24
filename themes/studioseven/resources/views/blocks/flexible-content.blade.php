{{--
  Title: Flexible Content
  Description: Une ou deux colonnes avec contenu & médias
  Category: template-blocks
  Icon: columns
  Post-Type: post page
  Keywords: Contenu, Flexible
--}}

@php
  $data = Block::flexibleContent($block['data']);
  $type = get_post_type();
@endphp

<section class="b-flexible-content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-20 offset-md-2">
          @include('elements/title', ['data' => $data['title']])
        </div>
      </div>
        <div class="row">
            @foreach ($data['components'] as $component)
                @php
                    if ($type === 'post') {
                        $column = $loop->index === 0 ? 'col-xl-11' : 'col-xl-11 offset-xl-2';
                    } else {
                        $column = 'col-md-20 col-xl-9 offset-md-2';
                    }
                    
                    if (count($data['components']) === 1) {
                        if ($type === 'post') {
                            $column = 'col-24';
                        } else {
                            $column = $component['name'] === 'flexible-classic-content' ? 'col-md-20 col-xl-14 offset-xl-5 offset-md-2' : 'col-md-20 offset-md-2';
                        }
                    }
                @endphp
                <div class="col-24 {{ $column }} @if ($loop->index === 1 && $component['name'] === 'flexible-media') {{ 'u-o1' }} @endif">
                    @include('components/' . $component['name'], ['data' => $component['data']])
                </div>
            @endforeach
        </div>
    </div>
</section>
