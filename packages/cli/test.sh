#!/usr/bin/env bats

@test "1 - Evaluating our cli" {
    eval "run ./mutube dump "
    echo $output

    [[ "$status" -eq 1 ]]
    [[ "$output" =~ "path" ]]
    
}

