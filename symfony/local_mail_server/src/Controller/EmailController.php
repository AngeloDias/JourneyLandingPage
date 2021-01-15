<?php

namespace App\Controller;

use App\Entity\Email;
use Swift_Mailer;
use Swift_Message;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EmailController extends AbstractController
{
    /**
     * Mudar!!!
     * @Route("/email", name="email")
     */
    public function indexAction(Request $request, Swift_Mailer $mailer)
    {
        $email = new Email();
        $form = $this->createForm(EmailType::class, $email);

        if($request->isMethod('POST')) {
            $form->submit($request->request->get($form->getName()));

            if($form->isSubmitted() && $form->isValid()) {
                $email->setEmail($_POST['email']);
                $email->setFirstName($_POST['name']);
                $swift_message = new Swift_Message("Olá, {$email->getFirstName()}!");

                $message = ($swift_message)
                    ->setFrom('angelossdias@gmail.com')
                    ->setTo($email->getEmail())
                    ->setBody(
                        $this->renderView(
                            'confirmation/registration.html.twig',
                            ['name' => $email->getFirstName()]
                        ),
                        'text/html'
                    );

                $mailer->send($message);
            }
        }

        return $this->render('base.html.twig', [
            'form' => $form->createView()
        ]);
    }
}
