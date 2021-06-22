  
<?php
switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");
        $json = file_get_contents('php://input');
        $params = json_decode($json);
        
        //the next entries are specific (change them if necessary)
        $name = $params->name;
        $email = $params->email; 
        $message = $params->message;

        $recipient = 'nissenjohannes@web.de';
        $subject = "Homepage JN: Contact From $name <$email>";
        $headers = "From:  noreply@johannes-nissen.developerakademie.com";

        mail($recipient, $subject, $message, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}