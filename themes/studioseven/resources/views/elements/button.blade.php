@if (isset($data['url']) && isset($data['title']))
    <a href="{{ $data['url'] }}" @if (isset($data['target']) && $data['target']) target="_blank" rel="noopener" @endif
        class="button @if (isset($secondary)) {{ 'secondary' }} @endif">{!! $data['title'] !!}</a>
@endif
