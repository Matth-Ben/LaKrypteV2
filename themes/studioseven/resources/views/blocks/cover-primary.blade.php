{{--  
    Title: Cover principal  
    Description: Description of example  
    Category: template-blocks  
    Icon: hammer  
    Post-Type: page post  
    Keywords: example
--}}

@php
    $data = Block::coverPrimary($block['data']);
@endphp

<section class="b-cover-primary">
    <div class="container-fluid">
        <div class="row">
            <div class="b-cover-primary__body">
                <div class="b-cover-primary__body-title">
                    @include('elements/title', ['data' => $data['title']])
                </div>
                <div class="b-cover-primary__body-thumbnail">
                    @include('elements/image', ['data' => $data['image']])
                </div>
            </div>
        </div>
    </div>
</div>
