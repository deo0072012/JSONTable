import { Component, OnInit } from '@angular/core';
interface Details{}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  details:Details[]= [
    {
    'TransitGatewayId': 'tgw-0fc2cc1f4a0884ba1',
    'TransitGatewayArn': 'arn:aws:ec2:us-west-2:arntgw123:transit-gateway/tgw-0fc2cc1f4a0884ba1',
    'State': 'available',
    'OwnerId': 'arntgw123',
    'CreationTime': '2020-02-19 22:37:39+00:00',
    },
    {
    'CidrBlock': '172.31.0.0/16',
        'DhcpOptionsId': 'dopt-919c08e9',
        'State': 'available',
        'VpcId': 'vpc-6d5fc015',
        'OwnerId': 'arntgw123',
        'InstanceTenancy': 'default',
    },
    {
      'CidrBlock': '10.175.0.0/16',
      'DhcpOptionsId': 'dopt-60584f07',
      'State': 'available',
      'VpcId': 'vpc-asdf98324sdf61231',
      'OwnerId': 'arntgw123',
      'InstanceTenancy': 'default',
    }
  ]
  
}
