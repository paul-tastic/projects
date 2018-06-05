<?php
	require("SubClasses.php");

	$Account1 = new ISA;

		$Account1->APR = 5.0;
		$Account1->SortCode = "20-20-20";
		$Account1->FirstName = "Paul";
		$Account1->LastName = "McNeme";
		$Account1->AdditionalServices = "Holiday Package";

		$Account1->Deposit(1000);
		$Account1->Lock();
		$Account1->Withdraw(200);
		$Account1->Unlock();
		$Account1->Withdraw(150);


		// will print out private
		// echo serialize($Account1);

		// only public properties
		//echo json_encode($Account1, JSON_PRETTY_PRINT);

?>