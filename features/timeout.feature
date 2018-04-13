Feature: timeout demo

@test1
Scenario: short timeout
    When the step slightly times out

@test2
Scenario: long timeout
    When the step times out bigtime